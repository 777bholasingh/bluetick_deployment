import React from 'react'
import './products.css'
// creating functional component for "what we offer" section
export default function Products() {
    
  return (
    <>
<section className="product-section ms-2" id="product">

<div className="product-container">
            <div className="product-item">
                <h2>What we offer?</h2>
                <h5>Explore AI Opportunities for Your Enterprise</h5>
                <p>Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.</p>
            </div>

            <div className="product-item">
                <h5>Design AI Trust Layer</h5>
                <p>Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.</p>
            </div>

            <div className="product-item">
                <h5>Scalability-Focused Solutions</h5>
                <p>Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.</p>
            </div>

            <div className="product-item">
                <h5>End to end Workflow automation</h5>
                <p>Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.</p>
            </div>

</div>

</section>


    </>
  )
}
