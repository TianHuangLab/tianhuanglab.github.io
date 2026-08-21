module Jekyll
  module CacheBust
    class CacheDigester
      require "digest/md5"

      def initialize(file_name:, directory: nil)
        @file_name = file_name
        @directory = directory
      end

      def digest!
        "#{@file_name}?#{Digest::MD5.hexdigest(contents)}"
      end

      private

      def contents
        content = +""
        # Hash the main source file itself.
        source_file = local_file_name
        if source_file && File.file?(source_file)
          content << source_file
          content << File.read(source_file)
        end

        # Also hash all dependency files in the supplied directory.
        if @directory && Dir.exist?(@directory)
          Dir[File.join(@directory, "**", "*")]
            .select { |path| File.file?(path) }
            .sort
            .each do |path|
              content << path
              content << File.read(path)
            end
        end
        content
      end

      def local_file_name
        return nil unless @file_name
        # main.css is generated from assets/css/main.scss.
        if @file_name.include?("assets/css/main.css")
          "assets/css/main.scss"
        else
          asset_index = @file_name.index("assets/")
          asset_index ? @file_name[asset_index..] : @file_name
        end
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(
        file_name: file_name
      ).digest!
    end

    def bust_css_cache(file_name)
      CacheDigester.new(
        file_name: file_name,
        directory: "_sass"
      ).digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)
