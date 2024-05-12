
interface IGreetingProps {
    name: string;
}
const Greeting = ({name}: IGreetingProps) => {

    return (
        <div>
            <h2>Hello, {name}</h2>
        </div>
    );
};

export default Greeting;