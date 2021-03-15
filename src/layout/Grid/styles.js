export const styles = ({
	container,
	item,
	direction,
	justify,
	alignItems,
	xs,
	h,
}) => ({
	display: container ? "flex" : item ? "flexItem" : "block",
	flexDirection: direction,
	justifyContent: justify,
	alignItems,
	width: item ? (xs ? `${xs * 10}%` : "auto") : "100%",
	flexWrap: "wrap",
	minHeight: h,
});
