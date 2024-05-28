// Object of storage product information
const products = {
  icedAmericano: {
    name: 'Iced Americano',
    price: '$4.6',
    description: 'Enjoy a refreshing Iced Americano, where pure coffee flavor meets a cool, invigorating sensation. No sugar, no milk—just revitalizing energy on a hot day.',
    review: '84 - Customer Review',
    calories: '5',
    sugar: '0',
    protein: '0',
    ingredients: ['100% Arabica coffee beans', 'Filtered water'],
    brewingProcess: ['Ground coffee is steeped in cold water for 20 hours', 'Filtered for a clean and smooth finish'],
    servingSuggestions: ['Serve over ice for a refreshing drink', 'Add milk or a dairy-free alternative for a creamy texture', 'Sweeten with simple syrup or flavored syrups to taste'],
    storageInstructions: ['Store in the refrigerator at or below 4°C (39°F)', 'Best consumed within 7 days of opening'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable'],
    allergenInformation: ['Free from common allergens', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 200 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Lydia',
        rating: '★★★★★',
        image: 'static/picture/testimonial-1.jpg',
        text: 'Absolutely love this cold brew! It’s smooth and not too bitter. Perfect for hot summer days. The rich flavor profile really stands out, and it’s refreshing without being overly sweet. I’ve tried many cold brews, but this one is by far my favorite. I also appreciate that it’s brewed for 20 hours, which really brings out the depth of the coffee. Highly recommend it to any cold brew lover!'
      },
      {
        name: 'Emily',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-2.jpg',
        text: 'Great taste and very refreshing. I wish it came in larger bottles. The smoothness and natural sweetness of this cold brew are spot on. It’s my go-to drink during work breaks. The only downside is the size; a larger bottle would be perfect for sharing with friends or keeping in the fridge for longer. Nevertheless, it’s an excellent product that I’ll continue to purchase regularly.'
      },
      {
        name: 'Riley',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-3.jpg',
        text: 'Delicious and convenient. I drink it every morning. Slightly pricey but worth it for the quality. I love how easy it is to have a high-quality cold brew at home without any hassle. The flavor is consistently great, and it pairs perfectly with a splash of almond milk. While it is a bit on the expensive side, the premium quality justifies the cost. It’s a great way to start my day with a refreshing and energizing drink.'
      }
    ]
  },
  caramelLatte: {
    name: 'Caramel latte',
    price: '$5.2',
    description: 'Enjoy the perfect blend of smooth espresso, creamy steamed milk, and sweet caramel. Each sip offers a rich and delightful taste experience. Treat yourself today!',
    review: '54 - Customar Review',
    calories: '200',
    sugar: '25',
    protein: '7',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk', 'Caramel syrup'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to extract rich espresso', 'Steamed milk is added to create a creamy texture', 'Caramel syrup is mixed in for a sweet, indulgent flavor'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add extra caramel drizzle on top for enhanced sweetness', 'Enjoy with a sprinkle of cocoa or cinnamon'],
    storageInstructions: ['Store any leftover caramel syrup in the refrigerator', 'Freshly brewed coffee is best consumed immediately'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Casey',
        rating: '★★★★★',
        image: 'static/picture/testimonial-4.jpg',
        text: 'Absolutely love this caramel latte! It’s smooth, sweet, and perfectly balanced. The caramel adds a delightful touch without overpowering the coffee. This is my favorite drink to start the day with. Highly recommend it to anyone who loves a good latte!'
      },
      {
        name: 'Qiaohe Zheng',
        rating: '★★★★★',
        image: 'static/picture/comment_zqh.jpg',
        text: 'Great taste and very refreshing. The caramel latte is my go-to drink during work breaks. I wish it came in larger sizes because it\'s so good! The only downside is the sweetness can be a bit much if you’re not in the mood for something sweet, but overall, an excellent choice.'
      }
    ]
  },
  classicCappuccino: {
    name: 'Classic Cappuccino',
    price: '$5.0',
    description: 'Experience the perfect blend of rich espresso and velvety steamed milk. Topped with a thick layer of frothy foam, it is a timeless favorite. Enjoy the classic taste with every sip.',
    review: '99 - Customar Review',
    calories: '120',
    sugar: '10',
    protein: '6',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create a rich espresso', 'Steamed milk is added to create a creamy texture', 'Topped with a thick layer of frothy foam'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add a sprinkle of cocoa powder or cinnamon on top for extra flavor', 'Pair with a pastry for a delightful breakfast or snack'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Cecilian',
        rating: '★★★★★',
        image: 'static/picture/comment_cecilian.jpg',
        text: 'The Classic Cappuccino is a delight! The perfect balance of rich espresso and creamy milk topped with frothy foam makes it my favorite morning drink. The quality is consistently excellent, and it’s a great way to start the day. Highly recommended for cappuccino lovers!'
      },
      {
        name: 'Lydia',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-5.jpg',
        text: 'I really enjoy the Classic Cappuccino. It’s smooth and has a great flavor. I just wish it came in a larger size, as I can\'t get enough of it. It\'s my go-to drink for work breaks. A larger cup would be perfect!'
      },
      {
        name: 'Taylor',
        rating: '★★★★★',
        image: 'static/picture/testimonial_6.jpg',
        text: 'This cappuccino is delicious and convenient. I drink it almost every day. While it’s a bit pricier than other options, the quality justifies the cost. The rich flavor and creamy texture make it a wonderful treat anytime.'
      }
    ]
  },
  whiteChocolateMocha: {
    name: 'White Chocolate Mocha',
    price: '$5.8',
    description: 'Indulge in the luxurious White Chocolate Mocha, a perfect fusion of rich espresso and creamy steamed milk, sweetened with luscious white chocolate syrup. Every sip is a decadent treat, offering a smooth and velvety coffee experience.',
    review: '102 - Customar Review',
    calories: '358',
    sugar: '42',
    protein: '9',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk', 'White chocolate syrup'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create rich espresso', 'Steamed milk is added to create a creamy texture', 'White chocolate syrup is mixed in for a sweet, indulgent flavor'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add whipped cream on top for extra indulgence', 'Enjoy with a biscotti or your favorite pastry'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Lydia',
        rating: '★★★★★',
        image: 'static/picture/testimonial-1.jpg',
        text: 'The White Chocolate Mocha is absolutely delightful! The combination of rich espresso and creamy white chocolate is perfectly balanced. It’s my go-to drink when I need a sweet pick-me-up. Highly recommend it to anyone who loves a sweet coffee treat!'
      },
      {
        name: 'Emily',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-2.jpg',
        text: 'I really enjoy the White Chocolate Mocha. It’s sweet and indulgent, perfect for a special treat. I wish it was a bit less sweet, but overall it’s delicious. The quality is great, and I’ll definitely be getting it again.'
      },
      {
        name: 'Riley',
        rating: '★★★★★',
        image: 'static/picture/testimonial-3.jpg',
        text: 'This is my favorite drink at the coffee shop! The white chocolate flavor is rich and creamy, and it complements the espresso perfectly. I love getting this as a treat during my breaks. The presentation with whipped cream on top is also a nice touch.'
      },
      {
        name: 'Casey',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-4.jpg',
        text: 'The White Chocolate Mocha is delicious and very satisfying. I find it a bit too sweet for my taste, but my friends absolutely love it. The espresso is strong, and the white chocolate adds a nice creamy sweetness. Great for anyone with a sweet tooth!'
      }
    ]
  },
  hazelnutMacchiato: {
    name: 'Hazelnut Macchiato',
    price: '$5.5',
    description: 'Savor the rich, nutty flavor of our Hazelnut Macchiato. Fresh espresso, steamed milk, and hazelnut syrup blend for a smooth, aromatic delight. Perfect for any time of day.',
    review: '69 - Customar Review',
    calories: '191',
    sugar: '24',
    protein: '7',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk', 'Hazelnut syrup'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create rich espresso', 'Steamed milk is added to create a creamy texture', 'Hazelnut syrup is mixed in for a nutty, sweet flavor'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add extra hazelnut syrup for enhanced flavor', 'Enjoy with a biscotti or your favorite pastry'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Qiaohe Zheng',
        rating: '★★★★★',
        image: 'static/picture/comment_zqh.jpg',
        text: 'The Hazelnut Macchiato is fantastic! The blend of rich espresso and the nutty hazelnut flavor is just perfect. It’s my favorite way to start the day. The taste is consistent, and it always feels like a treat. Highly recommend this to anyone who loves a good macchiato.'
      },
      {
        name: 'Cecilian',
        rating: '★★★★★',
        image: 'static/picture/comment_cecilian.jpg',
        text: 'I really enjoy the Hazelnut Macchiato. The flavor is great and not too overpowering. It’s the perfect drink for my afternoon break. I just wish it was available in a larger size because I always want more. Overall, a great drink that I look forward to having again.'
      }
    ]
  },
  standardColdBrew: {
    name: 'Standard Cold Brew',
    price: '$5.3',
    description: 'Experience the smooth, bold taste of our Standard Cold Brew. Brewed slowly for 20 hours, this refreshing coffee is rich in flavor and naturally sweet. Enjoy it black or with your choice of milk for a perfect cool pick-me-up.',
    review: '78 - Customar Review',
    calories: '6',
    sugar: '0',
    protein: '0',
    ingredients: ['100% Arabica coffee beans', 'Filtered water'],
    brewingProcess: ['Ground coffee is steeped in cold water for 20 hours', 'Filtered for a clean and smooth finish'],
    servingSuggestions: ['Serve over ice for a refreshing drink', 'Add milk or a dairy-free alternative for a creamy texture', 'Sweeten with simple syrup or flavored syrups to taste'],
    storageInstructions: ['Store in the refrigerator at or below 4°C (39°F)', 'Best consumed within 7 days of opening'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable'],
    allergenInformation: ['Free from common allergens', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 200 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Lydia',
        rating: '★★★★★',
        image: 'static/picture/testimonial-5.jpg',
        text: 'Absolutely love this cold brew! It’s smooth and not too bitter. Perfect for hot summer days. The rich flavor profile really stands out, and it’s refreshing without being overly sweet. I’ve tried many cold brews, but this one is by far my favorite. I also appreciate that it’s brewed for 20 hours, which really brings out the depth of the coffee. Highly recommend it to any cold brew lover!'
      },
      {
        name: 'Qiaohe Zheng',
        rating: '★★★★☆',
        image: 'static/picture/comment_zqh.jpg',
        text: 'Great taste and very refreshing. I wish it came in larger bottles. The smoothness and natural sweetness of this cold brew are spot on. It’s my go-to drink during work breaks. The only downside is the size; a larger bottle would be perfect for sharing with friends or keeping in the fridge for longer. Nevertheless, it’s an excellent product that I’ll continue to purchase regularly.'
      },
      {
        name: 'Taylor',
        rating: '★★★★★',
        image: 'static/picture/testimonial_6.jpg',
        text: 'Delicious and convenient. I drink it every morning. Slightly pricey but worth it for the quality. I love how easy it is to have a high-quality cold brew at home without any hassle. The flavor is consistently great, and it pairs perfectly with a splash of almond milk. While it is a bit on the expensive side, the premium quality justifies the cost. It’s a great way to start my day with a refreshing and energizing drink.'
      }
    ]
  },
  velvetLatte: {
    name: 'Velvet Latte',
    price: '$4.9',
    description: 'Indulge in the smooth and creamy texture of our Velvet Latte. This delightful coffee features rich espresso blended with perfectly steamed milk, creating a harmonious balance of bold and velvety flavors. Ideal for a comforting morning start or a cozy afternoon break.',
    review: '62 - Customar Review',
    calories: '127',
    sugar: '11',
    protein: '9',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create rich espresso', 'Steamed milk is added to create a creamy texture', 'Blended together for a smooth and velvety finish'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add a sprinkle of cocoa or cinnamon on top for extra flavor', 'Enjoy with a pastry for a delightful breakfast or snack'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Riley',
        rating: '★★★★★',
        image: 'static/picture/testimonial-3.jpg',
        text: 'The Velvet Latte is absolutely amazing! The texture is so smooth and creamy, it’s like drinking a cloud. The espresso and milk are perfectly balanced, making it a delightful drink to start my day. Highly recommend it to anyone looking for a high-quality latte.'
      },
      {
        name: 'Lydia',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-1.jpg',
        text: 'I really enjoy the Velvet Latte. It’s rich, creamy, and has a wonderful flavor. The only reason I didn’t give it five stars is that I wish it was a bit hotter when served. Otherwise, it’s a fantastic drink that I’ll continue to order regularly.'
      },
      {
        name: 'Emily',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-2.jpg',
        text: 'The Velvet Latte is delicious and very satisfying. The blend of espresso and milk is perfect, and the texture is incredibly smooth. It’s a bit on the pricey side, but the quality justifies the cost. A great choice for a comforting and indulgent coffee experience.'
      }
    ]
  },
  icedCaramelMacchiato: {
    name: 'Iced Caramel Macchiato',
    price: '$5.1',
    description: 'Delight in the refreshing and sweet taste of our Iced Caramel Macchiato. This invigorating drink features layers of smooth espresso, creamy milk, and a rich caramel drizzle. Served over ice, it is the perfect blend of bold and sweet for any time of the day.',
    review: '37 - Customar Review',
    calories: '250',
    sugar: '36',
    protein: '7',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk', 'Caramel syrup'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create rich espresso', 'Steamed milk is added to create a creamy texture', 'Caramel syrup is drizzled over the top for a sweet finish'],
    servingSuggestions: ['Serve over ice for a refreshing drink', 'Add extra caramel drizzle for enhanced sweetness', 'Enjoy with a pastry for a delightful treat'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Cecilian',
        rating: '★★★★★',
        image: 'static/picture/comment_cecilian.jpg',
        text: 'The Iced Caramel Macchiato is absolutely delicious! The layers of espresso, milk, and caramel create a perfect balance of flavors. It’s refreshing and sweet, making it my go-to drink on hot days. Highly recommend it to anyone looking for a tasty and refreshing coffee treat.'
      }
    ]
  },
  velvetCappuccino: {
    name: 'Velvet Cappuccino',
    price: '$4.2',
    description: 'Enjoy the luxurious taste of our Velvet Cappuccino. This smooth and creamy coffee blends rich espresso with perfectly steamed milk, topped with a delicate foam. It is a comforting and elegant choice for any coffee lover.',
    review: '45 - Customar Review',
    calories: '152',
    sugar: '12',
    protein: '9',
    ingredients: ['100% Arabica coffee beans', 'Filtered water', 'Fresh milk'],
    brewingProcess: ['Freshly ground coffee is brewed with hot water to create rich espresso', 'Steamed milk is added to create a creamy texture', 'Topped with a delicate foam for a smooth finish'],
    servingSuggestions: ['Serve hot for a comforting drink', 'Add a sprinkle of cocoa or cinnamon on top for extra flavor', 'Enjoy with a pastry for a delightful breakfast or snack'],
    storageInstructions: ['Best consumed immediately after preparation', 'Store any leftover espresso in the refrigerator and consume within 24 hours'],
    sustainability: ['Our coffee beans are ethically sourced from sustainable farms', 'Packaging is 100% recyclable', 'We support fair trade practices'],
    allergenInformation: ['Contains milk (dairy)', 'Gluten-free', 'No artificial preservatives'],
    caffeineContent: 'Approximately 150 mg per serving',
    contactInfo: 'For more information or inquiries, please contact our customer service at cecilian0625@gmail.com or call us at +7868 8888 6666 999',
    reviews: [
      {
        name: 'Emily',
        rating: '★★★★★',
        image: 'static/picture/testimonial-2.jpg',
        text: 'The Velvet Cappuccino is amazing! The smooth, creamy texture and the rich espresso flavor are just perfect. It’s my favorite way to start the day. Highly recommend it to anyone who loves a good cappuccino.'
      },
      {
        name: 'Casey',
        rating: '★★★★☆',
        image: 'static/picture/testimonial-4.jpg',
        text: 'I really enjoy the Velvet Cappuccino. It’s rich and creamy with a wonderful flavor. The only reason I didn’t give it five stars is that I wish it was a bit hotter when served. Otherwise, it’s a fantastic drink that I’ll continue to order regularly.'
      }
    ]
  }
};

// Update product information functions
function updateProductInfo(productKey) {
  const product = products[productKey];
  const content = document.querySelector('.details_content');

  // Add transition effect
  content.classList.add('hidden');

  // Ensure the transition effect has time to run
  setTimeout(() => {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-review').innerText = product.review;
    document.getElementById('product-calories').innerText = product.calories;
    document.getElementById('product-sugar').innerText = product.sugar;
    document.getElementById('product-protein').innerText = product.protein;

    // Update Product Details content
    const productDetails = document.getElementById('product_description');
    productDetails.querySelector('p').innerText = product.description;
    productDetails.querySelector('.ingredients').innerHTML = product.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    productDetails.querySelector('.brewing-process').innerHTML = product.brewingProcess.map(step => `<li>${step}</li>`).join('');
    productDetails.querySelector('.serving-suggestions').innerHTML = product.servingSuggestions.map(suggestion => `<li>${suggestion}</li>`).join('');

    // Update Additional Information content
    const additionalInfo = document.getElementById('product_additional_info');
    additionalInfo.querySelector('.storage-instructions').innerHTML = product.storageInstructions.map(instruction => `<li>${instruction}</li>`).join('');
    additionalInfo.querySelector('.sustainability').innerHTML = product.sustainability.map(item => `<li>${item}</li>`).join('');
    additionalInfo.querySelector('.allergen-information').innerHTML = product.allergenInformation.map(info => `<li>${info}</li>`).join('');
    additionalInfo.querySelector('.caffeine-content').innerText = product.caffeineContent;
    additionalInfo.querySelector('.contact-info').innerText = product.contactInfo;

    // Update Review content
    const reviewContainer = document.getElementById('product_review');
    reviewContainer.innerHTML = product.reviews.map(review => `
      <div class="review-card">
        <img src="${review.image}" class="customers-image">
        <div class="review-content">
          <div class="review-header">
            <span class="reviewer-name">${review.name}</span>
            <div class="rating">${review.rating}</div>
          </div>
          <p class="review-text">${review.text}</p>
        </div>
      </div>
    `).join('');


    // Ensure the transition effect has time to run
    setTimeout(() => {
      content.classList.remove('hidden');
    }, 10); // Ensure enough time for the content to be fully hidden
  }, 500); // Time should match the transition time in CSS
}
