export default function Skills() {
    return (
        <div>
            <div className="text-left mb-4 mt-20">
                <h2 className="font-bold text-3xl text-gray-700">Skills</h2>
            </div>
            <div className="border-b-2 border-gray-200 mb-8"></div>

            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-12 ml-2">Frontend</p>
                </div>
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-semibold"> Dart/Flutter</li>
                        <li className="font-semibold"> NextJS/React</li>
                        <li className="font-semibold"> Bloc, Cubit, GetX, Riverpod </li>
                        <li className="font-semibold"> Figma, Rive</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-12 ml-2">Backend</p>
                </div>
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-semibold"> NestJS/Typescript </li>
                        <li className="font-semibold"> Python </li>
                        <li className="font-semibold"> PostgreSQL, MySQL, Redis </li>
                        <li className="font-semibold"> REST API, GraphQL, Swagger, Playground </li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-12 mb-8">
                <div className="flex-none w-60">
                    <p className="font-bold text-xl text-gray-700 mt-12 ml-2">DevOps</p>
                </div>
                <div className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                        <li className="font-semibold"> Git, Github, Gitlab, Github Actions </li>
                        <li className="font-semibold"> Sentry </li>
                        <li className="font-semibold"> AWS, Firebase, Vercel </li>
                        <li className="font-semibold"> Nginx </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}