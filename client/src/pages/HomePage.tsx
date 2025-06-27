import FormComponent from "@/components/forms/FormComponent"

const features = [{}];

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-dark to-gray-900">
            {/* Hero Section */}
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8">
                <div className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-8">
                    {/* Left Column */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Work <span className="text-primary">Room</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300 lg:mx-0">
                            The ultimate real-time collaboration platform for developers and teams.
                            Code, draw, and communicate in one seamless workspace.
                        </p>
                        
                        {/* Feature Grid */}
                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 rounded-xl bg-darkHover/50 p-4 backdrop-blur-sm">
                                    <div className="flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                                        <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column - Form */}
                    <div className="w-full max-w-md">
                        <div className="rounded-2xl bg-darkHover/50 p-8 backdrop-blur-sm">
                            <FormComponent />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
