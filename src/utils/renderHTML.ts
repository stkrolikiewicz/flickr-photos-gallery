import React from "react";

export const renderHTML = (rawHTML: string, className: string) => React.createElement("p", { className: className, dangerouslySetInnerHTML: { __html: rawHTML } });