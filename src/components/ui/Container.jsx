function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`mx-auto w-full min-w-0 max-w-[84rem] px-6 sm:px-8 lg:px-12 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Container;
