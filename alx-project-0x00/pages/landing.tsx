import Card from "@/components/Card";
import Button from "@/components/Button";


const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
}

const shapes = [ "rounded-sm", "rounded-md", "rounded-lg", "rounded-full" ]

const Landing : React.FC = () => {

    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="flex flex-col items-center mt-4">
                <Button title="Click Me" styles={`${sizes.small} ${shapes[0]} bg-blue-500 text-white`} />
                <Button title="Click Me" styles={`${sizes.medium} ${shapes[1]} bg-green-500 text-white mt-2`} />
                <Button title="Click Me" styles={`${sizes.large} ${shapes[2]} bg-red-500 text-white mt-2`} />
            </div>
        </div>
    )
}

export default Landing;