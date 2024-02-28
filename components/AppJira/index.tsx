import { ILayout } from "@/models"
import { Header } from "@/modules"


const CLientLayout = ({ children }: ILayout) => {


    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
export default CLientLayout