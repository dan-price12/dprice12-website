type IllustrationWrapperProps = {
    children: React.ReactNode;
};

export default function IllustrationWrapper(props: IllustrationWrapperProps) {
    const {children} = props;

    return <div style={{height: 'auto', maxWidth: '200px', margin: 'auto'}}>{children}</div>;
}
