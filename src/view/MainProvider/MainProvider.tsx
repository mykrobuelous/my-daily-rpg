interface Props {
	children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children }) => {
	return <div className="box-center view-screen">{children}</div>;
};

export default MainProvider;
