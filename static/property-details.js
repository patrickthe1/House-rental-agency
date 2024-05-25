const properties = [
    // Array of objects containing property details for each property
    { id: 1, title: "Modern Luxury In This Recently Built Home In Remera.", highlights:[
      "<li>Modern 2-bedroom, 1-bathroom apartment </li>",
      "<li>Large windows with ample natural light</li>",
      "<li>Hardwood floors throughout </li>",
      "<li>Stainless steel appliances in kitchen</li>",
      "<li>In-unit washer and dryer</li>",
      "<li>Balcony with city views </li>",
      "<li>Pet-friendly building (breed restrictions apply) <li>"
    ], image: "images/Properties/p1.png", contacts: +25078844444 },
    { id: 2, title: "Discover Modern Elegance And Spacious Living In Kibagabaga, Kigali!", highlights: ["<li>Spacious G+1 home with terraces on the ground floor and first level</li>",
    "<li>Five bedrooms and five bathrooms</li>",
    "<li>Two living rooms</li>",
    "<li>Large garden</li>",
    "<li>Large kitchen</li>",
    "<li>Big parking area</li>",
    "<li>Spacious staff quarter with an outdoor kitchen</li>"], image: "images/Properties/p2.png",contacts:+250788555578  },
    { id: 3, title: "Unlock The Potential Of This 4-Bedroom, 3-Bathroom Residence In Remera, Kigali.", highlights:[
      "<li>Prime Location: Located in the desirable neighborhood of Remera, offering easy access to amenities and transportation routes.</li>",
      "<li>Spacious Interiors: With 544 sqm of space, theres plenty of room to customize and renovate to your taste.</li>",
      "<li>Car Parking: Dedicated parking for 1-2 cars adds convenience for residents.</li>",
      "<li>Amenities Nearby: Enjoy access to supermarkets, restaurants, and cafes in the Remera neighborhood.</li>",
    ], image: "images/Properties/p3.png",contacts:+250798727699  },
    { id: 4, title: "Welcome To This Extraordinary Penthouse, A True Epitome Of Luxury Located In The Prestigious Nyarutarama Neighborhood In Kigali.", highlights:[
      "<li>Location: Nestled in Nyarutarama, one of Kigali’s most sought-after neighborhoods, this penthouse offers an unparalleled lifestyle of elegance and convenience. Experience the prestige of living in a neighborhood renowned for its tranquility and sophistication.</li>",
      "<li>High-End Finishes: Impeccable details define the interiors, featuring exquisite architrave, mahogany doors, and double-glazed PVC-U windows, exuding sophistication at every corner. Revel in the exceptional craftsmanship and attention to detail that enhance the overall ambiance of this penthouse.</li>",
      "<li>Pool: Enjoy the convenience of a pool within the compound, perfect for relaxation and recreation. Take a refreshing dip or lounge by the poolside, soaking in the serene atmosphere of your luxurious residence</li>",
      "<li>Amenities Nearby: Enjoy access to supermarkets, restaurants, and cafes in the Remera neighborhood.</li>",
      "<li>Unmatched Furnishings: To complement the luxurious ambiance, the penthouse comes fully furnished with high-quality, locally crafted furniture by Woodhabitat. Each piece is a testament to Rwandan craftsmanship, adding an elegant touch to your living spaces.</li>",
    ], image: "images/Properties/p4.png", contacts:+250798077654 },
    { id: 5, title: "Twin-House For Rent In Kimironko, Zindiro.", highlights:[
      "<li>Furnished Splendor: Immerse yourself in these fully furnished twin homes, ready to welcome you with style and comfort. </li>",
      "<li>Spacious Living: Each house boasts 4 bedrooms, ensuring ample space for family members or guests, creating a total of 8 bedrooms across both homes.</li>",
      "<li>Elegantly Designed Bathrooms: With 4 bathrooms in each house, a total of 8 bathrooms cater to your convenience, providing both functionality and sophistication </li>",
      "<li>Stainless steel appliances in kitchen</li>",
      "<li>In-unit washer and dryer</li>",
      "<li>Balcony with city views </li>",
      "<li>Pet-friendly building (breed restrictions apply) <li>"
    ], image: "images/Properties/p5.png" , contacts:+25078846754 },
    { id: 6, title: "Contemporary Luxury Villa In Kinyinya For Rent", highlights:[
      "<li>Nestled on a hill in the upscale part of Kinyinya, this property offers breathtaking panoramic views of the surrounding area</li>",
      "<li> This modern architectural masterpiece stands tall with three floors of contemporary elegance, designed to maximize space and natural light.</li>",
      "<li>luxurious amenities found throughout the home</li>",
      "<li>This residence boasts a total of 5 spacious bedrooms and 6 modern bathrooms, providing ample accommodation for a growing family or guests. The bedrooms are designed for ultimate comfort and relaxation.</li>",
      "<li>One of the standout features of this home is its spacious rooftop terrace, accessible through a sliding door – a perfect spot for memorable gatherings.</li>",
      "<li>Outside, a small garden offers a charming outdoor space, while separate staff quarters ensure privacy and convenience for household helpers</li>",
    ], image: "images/Properties/p6.png", contacts:+25078846542  },
    { id: 7, title: "Discover Refined Living With This Exceptional Luxury Villa In Nyarutarama, Kigali.", highlights:[
      "<li>Enjoy the panoramic views and spacious open living room with a high-end kitchen.</li>",
      "<li> featuring one of the most impressive ceilings and window arrangements.</li>",
      "<li>With a plot size of 1500 sqm and a living area of 400 sqm, this modern home seamlessly combines sophistication and comfort.</li>",
      "<li>Amenities Nearby: Enjoy access to supermarkets, restaurants, and cafes in the Remera neighborhood.</li>",
      "<li>Unmatched Furnishings: To complement the luxurious ambiance, the penthouse comes fully furnished with high-quality, locally crafted furniture by Woodhabitat. Each piece is a testament to Rwandan craftsmanship, adding an elegant touch to your living spaces.</li>",
    ], image: "images/Properties/p7.png",contacts:+250797654231 },
    { id: 8, title: "House For Rent  In Rusororo, Kigali", highlights:[
      "<li>	• Unfurnished Elegance: Tailor this home to your personal taste with an unfurnished interior, allowing you the freedom to design each room according to your unique style.</li>",
      "<li>4 Bedrooms, 3 Bathrooms: Experience spacious living with four bedrooms and three bathrooms, ensuring comfort and privacy for all family members. gements.</li>",
      "<li>Shopping Convenience: Grocery stores like Sawa City are in close proximity, making daily errands a breeze.</li>",
      "<li>	• 3 Minutes to Intare Arena: Enjoy entertainment and cultural events with just a quick 3-minute drive to Intare Arena.</li>",
      "<li>20 Minutes from Kigali International Airport: Whether you’re a frequent traveler or simply appreciate convenience, this home is a mere 20 minutes away from Kigali International Airport.</li>",
    ], image: "images/Properties/p8.png" ,contacts:+250798766545 },
    { id: 9, title: "This Charming 4-Bedroom Family Home In Kibagabaga, Kigali Is Now Available", highlights:[
      "<li>	•Good Location: This home enjoys a good location with easy access via a tarmac road.</li>",
      "<li>4 bedrooms and 2 bathrooms.</li>",
      "<li>Storage room and drying room</li>",
      "<li>	•	• Staff Quarters: A separate staff quarter provides privacy and convenience for your household help.Covered Parking</li>",
      "<li>Garden: The well-tended garden offers a peaceful retreat. It’s a wonderful space for outdoor activities, gardening, or simply unwinding.</li>",
    ], image: "images/Properties/p9.png" , contacts:+25078877625}
  ];

  
const propertyImages = document.querySelectorAll(".box img");

propertyImages.forEach(image => {
    image.addEventListener("click", () => {
      const propertyId = image.dataset.propertyId;
      const selectedProperty = properties.find(property => property.id === parseInt(propertyId));
      updatePropertyDetails(selectedProperty);
    });
  });

  
  function updatePropertyDetails(property) {

    document.getElementById("property-image").src = property.image;
    document.getElementById("property-title").innerHTML = property.title;
    document.getElementById("property-description").innerHTML = property.highlights.join("");
    document.getElementById("contacts").innerHTML = "Contacts: " + "<i class=\"bx bx-phone\"></i>" + "&nbsp;" + property.contacts
    console.log(property.image)
  }

