import { ILayout } from "@/models"
import { Footer, Header } from "@/modules"

const CLientLayout = ({ children }: ILayout) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default CLientLayout