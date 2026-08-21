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