import React from "react";

const ReferText = ({ num , title, desc, descStar }) => {
  return (
  <li>
    <a href="/">
    <span className="id">{num}</span>
    <span className="title">{title}</span>
    <span className="desc">{desc}</span>
    <span className="descStar">{descStar}</span>
    </a>
  </li>
  );
}

const ReferCont = ({ references }) => {

  // console.log(references);

  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer , idx) => (
              <ReferText 
                key = {idx}
                num = {refer.num}
                title = {refer.title}
                desc = {refer.desc}
                descStar = {refer.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ReferCont;