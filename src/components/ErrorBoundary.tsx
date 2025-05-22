import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function Fallback() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-2xl font-semibold mb-2">
                Something went wrong 🥲
            </h1>
            <p>Please reload the page or try again later.</p>
        </div>
    );
}

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    return (
        <ReactErrorBoundary FallbackComponent={Fallback}>
            {children}
        </ReactErrorBoundary>
    );
};
