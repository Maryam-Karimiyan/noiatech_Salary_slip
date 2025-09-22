export function ArrowButton({ IconComponent, className, sx, onClick }) {
  const isDisabled = className.includes("slick-disabled");
  return (
    <IconComponent
      onClick={onClick}
      sx={{
        color: "designPizza.backBtn",
        cursor: "pointer",
        zIndex: 2,
        border: "2px solid",
        borderColor: "designPizza.backBtn",
        borderRadius: 2,
        opacity: isDisabled ? 0.5 : 1,
        fontSize: 24,
        "&:hover": {
          color: "designPizza.backBtn",
        },
        ...sx,
      }}
      className={className.replace("slick-disabled", "")}
    />
  );
}
