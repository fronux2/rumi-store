interface Props {
    children?: React.ReactNode
}

const NavPage: React.FunctionComponent<Props> = ({ children }) => {
    return <div className="h-14">
        {children}
    </div>
}

export default NavPage
