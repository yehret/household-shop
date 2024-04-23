import { useState } from 'react';

const Accordion = ({ productData }) => {
  const data = [
    {
      title: 'Опис',
      content: productData.description,
    },
    {
      title: 'Відгуки',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo provident, nihil vitae, cumque earum, itaque voluptates ipsum eos excepturi consectetur minus ab hic nemo. Magni incidunt totam ab fugiat corrupti excepturi eveniet sequi, dicta eligendi numquam sint alias voluptate, accusamus facere suscipit autem sapiente nesciunt nam explicabo quo id! Eos in quod maxime optio ipsam! Quas architecto, ea hic tenetur aliquam quae laudantium ex sequi ipsam illum quisquam, quod iste. Fugiat, unde! Magnam accusamus deleniti nesciunt quam maxime provident cum quasi voluptas, porro sunt, tenetur nisi inventore. Officia hic recusandae veritatis consectetur perspiciatis repellendus quibusdam doloribus quae distinctio cum.',
    },
  ];

  return (
    <section className="product-properties">
      <div>
        <div className="accordion">
          {data.map((data, index) => (
            <AccordionItem key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const cssClass = isActive ? 'accordion__item active' : 'accordion__item';

  return (
    <div className={cssClass}>
      <div onClick={() => setIsActive(!isActive)} className="accordion__item__title">
        {title}
        <i className="icon icon-plus">&nbsp;</i>
      </div>
      <div className="accordion__item__content">
        <div className="text">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
