// This file contains the API routes for Printful integration
// In a production environment, you would implement proper authentication and error handling

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Mock response for product data
    // In production, this would fetch from the Printful API
    const products = [
      {
        id: 1,
        name: "Red Vision Logo T-Shirt",
        price: 29.99,
        image: "/images/red_vision_logo.png",
        category: "Apparel",
        description: "Premium cotton t-shirt featuring the iconic Red Vision logo. AI-selected design based on current fashion trends and fan preferences."
      },
      {
        id: 2,
        name: "AI Lifestyle Hoodie",
        price: 59.99,
        image: "/images/red_vision_logo.png",
        category: "Apparel",
        description: "Comfortable hoodie with AI-generated design elements that reflect the intersection of music, technology, and lifestyle."
      },
      // Additional products would be fetched from Printful
    ];
    
    res.status(200).json({ products });
  } else if (req.method === 'POST') {
    // Mock order creation
    // In production, this would send the order to Printful
    const order = req.body;
    
    // Process the order
    const orderResponse = {
      id: Math.floor(Math.random() * 10000),
      status: "processing",
      created_at: new Date().toISOString(),
      items: order.items,
      total: order.total,
      shipping_address: order.shipping_address
    };
    
    res.status(200).json({ order: orderResponse });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
