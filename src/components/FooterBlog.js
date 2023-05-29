import React from "react";
import "./Footer.css";

function FooterBlog({ style, text }) {
  return (
    <div>
      <div className="blog-item">
        <div className="pic-ftr" style={style}></div>
        <div className="detail-pic">
          <div className="text-detail">{text}</div>
          <div className="date-detail">Nov 29, 2022</div>
        </div>
      </div>
    </div>
  );
}

export default FooterBlog;
