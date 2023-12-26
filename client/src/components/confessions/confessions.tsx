import { ConfessionInput } from "./formInput";
import { ConfessionSelect } from "./formSelect";
import { ConfessButton } from "./formSubmit";
import { ConfessionTextBox } from "./formTextbox";

const Confessions = () =>{
    return (<>
        <section>
            <form>
                <ConfessionInput/>
                <ConfessionSelect/>
                <ConfessionTextBox/>
                <ConfessButton/>
            </form>
        </section>
    </>)
}
export default Confessions;