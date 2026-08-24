document.addEventListener("DOMContentLoaded", function () {
    window.dataLayer = window.dataLayer || [];
  
    function pushHotelEvent(eventName, element) {
      window.dataLayer.push({
        event: eventName,
        hotel_id: element.dataset.hotelId || "",
        hotel_name: element.dataset.hotelName || "",
        affiliate_platform: element.dataset.hotelPlatform || "",
        hotel_placement: element.dataset.hotelPlacement || "",
        page_path: element.dataset.pagePath || window.location.pathname
      });
    }
  
    const cards = document.querySelectorAll("[data-hotel-affiliate-card]");
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries, observerInstance) {
          entries.forEach(function (entry) {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.5 &&
              !entry.target.dataset.hotelImpressionSent
            ) {
              entry.target.dataset.hotelImpressionSent = "true";
              pushHotelEvent("hotel_impression", entry.target);
              observerInstance.unobserve(entry.target);
            }
          });
        },
        {
          threshold: [0.5]
        }
      );
  
      cards.forEach(function (card) {
        observer.observe(card);
      });
    }
  
    const links = document.querySelectorAll("[data-hotel-affiliate-link]");
  
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        pushHotelEvent("hotel_affiliate_click", link);
      });
    });
  });


  (() => {
    function initStayAffiliateTracking() {
      window.dataLayer = window.dataLayer || [];
  
      const links = Array.from(
        document.querySelectorAll("[data-stay-affiliate-link]")
      );
  
      if (!links.length) return;
  
      function getPayload(element) {
        return {
          affiliate_scope: element.dataset.affiliateScope || "",
          area_id: element.dataset.areaId || "",
          city: element.dataset.city || "",
          affiliate_platform: element.dataset.platform || "",
          hotel_placement: element.dataset.hotelPlacement || "unspecified",
          page_path: element.dataset.pagePath || window.location.pathname
        };
      }
  
      links.forEach((link) => {
        link.addEventListener("click", () => {
          window.dataLayer.push({
            event: "stay_affiliate_click",
            ...getPayload(link)
          });
        });
      });
  
      const seen = new WeakSet();
  
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              if (entry.intersectionRatio < 0.5) return;
              if (seen.has(entry.target)) return;
  
              seen.add(entry.target);
  
              window.dataLayer.push({
                event: "stay_affiliate_impression",
                ...getPayload(entry.target)
              });
  
              observer.unobserve(entry.target);
            });
          },
          {
            threshold: [0.5]
          }
        );
  
        links.forEach((link) => observer.observe(link));
      }
    }
  
    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        initStayAffiliateTracking
      );
    } else {
      initStayAffiliateTracking();
    }
  })();