import './App.css';

function App() {
    return (
        <>
            <nav id="navbar">
                <header>React Documentation</header>
                <ul>
                    <li>
                        <a className="nav-link" href={"#Introduction"}>
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Getting_Started"}>
                            Getting Started
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Core_Concepts"}>
                            Core Concepts
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Advanced_Guides"}>
                            Advanced Guides
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Testing"}>
                            Testing
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Performance_Optimization"}>
                            Performance Optimization
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Best_Practices"}>
                            Best Practices
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href={"#Resources"}>
                            Resources
                        </a>
                    </li>
                </ul>
            </nav>
            <main id="main-doc">
                <section className="main-section" id="Introduction">
                    <header>Introduction</header>
                    <article>
                        <p>
                            React is a JavaScript library for building user interfaces. It allows
                            developers to create large web applications that can update and render
                            efficiently in response to data changes. React is maintained by
                            Facebook and a community of individual developers and companies.
                        </p>
                    </article>
                </section>
                <section className="main-section" id="Getting_Started">
                    <header>Getting Started</header>
                    <article>
                        <h2>Installation</h2>
                        <p>
                            You can install React using npm or yarn. First, ensure you have
                            Node.js installed.
                        </p>
                        <h3>Using npm:</h3>
                        <code>npm install react react-dom</code>
                        <h3>Using yarn:</h3>
                        <code>yarn add react react-dom</code>
                        <h2>Starting up new project</h2>
                        <p>
                            You can quickly set up a new React project using Create React App, a
                            tool that sets up the development environment for you.
                        </p>
                        <h3>Using npx:</h3>
                        <code>npx create-react-app my-app cd my-app npm start</code>
                    </article>
                </section>
                <section className="main-section" id="Core_Concepts">
                    <header>Core Concepts</header>
                    <article>
                        <h2>JSX</h2>
                        <p>
                            JSX is a syntax extension for JavaScript that looks similar to XML or
                            HTML. It allows you to write HTML-like code within JavaScript, which
                            React can then transform into actual HTML in the DOM.
                        </p>
                        <code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;</code>
                        <h2>Components</h2>
                        <p>
                            Components are the building blocks of a React application. They can be
                            functional or class-based.
                        </p>
                        <h3>Functional Component:</h3>
                        <code>
                            function Welcome(props) {"{"}
                            return &lt;h1&gt;Hello, {"{"}props.name{"}"}&lt;/h1&gt;
                            {"}"}
                        </code>
                        <h3>Class Component:</h3>
                        <code>
                            class Welcome extends React.Component {"{"}
                            render() {"{"}
                            return &lt;h1&gt;Hello, {"{"}this.props.name{"}"}&lt;/h1&gt;
                            {"}"}
                            {"}"}
                        </code>
                        <h2>State and Props</h2>
                        <ul>
                            <li>
                                <span>State:</span> State is a way to store and manage data in a
                                component. It's mutable and can change over time.
                                <br />
                                <code>
                                    class Counter extends React.Component&gt; {"{"}
                                    <br />
                                    &nbsp;&nbsp;constructor(props) {"{"}
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;super(props);
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;this.state = {"{"} count: 0 {"}"};<br />
                                    &nbsp;&nbsp;{"}"}
                                    <br />
                                    <br />
                                    &nbsp;&nbsp;increment = () =&gt; {"{"}
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;this.setState({"{"} count:
                                    this.state.count + 1 {"}"});
                                    <br />
                                    &nbsp;&nbsp;{"}"};<br />
                                    <br />
                                    &nbsp;&nbsp;render() {"{"}
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Count:{" "}
                                    {"{"}this.state.count{"}"}&lt;/p&gt;
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                                    onClick={"{"}this.increment{"}"}&gt;Increment&lt;/button&gt;
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;);
                                    <br />
                                    &nbsp;&nbsp;{"}"}
                                    <br />
                                    {"}"}
                                </code>
                            </li>
                            <li>
                                <span>Props:</span> Props are inputs to a component. They are passed
                                to the component via HTML attributes and are immutable.
                                <br />
                                <code>
                                    function Greeting(props) {"{"}
                                    <br />
                                    &nbsp;&nbsp;return &lt;h1&gt;Hello, {"{"}props.name{"}"}
                                    &lt;/h1&gt;;
                                    <br />
                                    {"}"}
                                </code>
                            </li>
                        </ul>
                        <h2>Lifecycle Methods</h2>
                        <p>
                            Lifecycle methods are special methods in class components that run at
                            specific points in a component's lifecycle.
                        </p>
                        <ul>
                            <li>
                                <span>componentDidMount:</span> Called after the component is
                                rendered.
                            </li>
                            <li>
                                <span>componentDidUpdate:</span> Called after the component updates.
                            </li>
                            <li>
                                <span>componentWillUnmount:</span> Called before the component is
                                removed.
                            </li>
                        </ul>
                        <h2>Event Handling</h2>
                        <p>
                            React handles events similarly to DOM elements. However, there are
                            some syntax differences.
                        </p>
                        <code>
                            function ActionButton() {"{"}
                            <br />
                            &nbsp;&nbsp;function handleClick() {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;alert('Button clicked!');
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}handleClick{"}"}&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;);
                            <br />
                            {"}"}
                        </code>
                    </article>
                </section>
                <section className="main-section" id="Advanced_Guides">
                    <header>Advanced Guides</header>
                    <article>
                        <h2>Hooks</h2>
                        <p>
                            Hooks allow you to use state and other React features without writing
                            a class.
                        </p>
                        <code>
                            function ActionButton() {"{"}
                            <br />
                            &nbsp;&nbsp;function handleClick() {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;alert('Button clicked!');
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}handleClick{"}"}&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;);
                            <br />
                            {"}"}
                        </code>
                        <h3>useEffect:</h3>
                        <code>
                            &lt;import React, {"{"} useEffect {"}"} from 'react';&gt;
                            <br />
                            <br />
                            function Example() {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;useEffect(() =&gt; {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;document.title = 'React App';
                            <br />
                            &nbsp;&nbsp;{"}"}, []);
                            <br />
                            <br />
                            &nbsp;&nbsp;return &lt;div&gt;Check the document title!&lt;/div&gt;;
                            <br />
                            &lt;/function Example
                        </code>
                        <h2>Context</h2>
                        <p>
                            Context provides a way to pass data through the component tree without
                            having to pass props down manually at every level.
                        </p>
                        <code>
                            &lt;const MyContext = React.createContext();&gt;
                            <br />
                            <br />
                            function App() {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;MyContext.Provider value="Hello from
                            context!"&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MyComponent /&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/MyContext.Provider&gt;
                            <br />
                            &nbsp;&nbsp;);
                            <br />
                            &lt;/function App&gt;
                            <br />
                            <br />
                            &lt;function MyComponent() {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;return (<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;MyContext.Consumer&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}value =&gt; &lt;p&gt;{"{"}
                            value{"}"}&lt;/p&gt;{"}"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/MyContext.Consumer&gt;
                            <br />
                            &nbsp;&nbsp;);
                            <br />
                            &lt;/function MyComponent&gt;
                        </code>
                        <h2>Refs</h2>
                        <p>
                            Refs provide a way to access DOM nodes or React elements created in
                            the render method.
                        </p>
                        <code>
                            class MyComponent extends React.Component {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;constructor(props) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;this.myRef = React.createRef();
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;render() {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;div ref={"{"}this.myRef{"}"}
                            &gt;Hello, world!&lt;/div&gt;;
                            <br />
                            &nbsp;&nbsp;{"}"}
                        </code>
                        <h2>Error Boundaries</h2>
                        <p>
                            Error boundaries catch JavaScript errors anywhere in the component
                            tree and display a fallback UI.
                        </p>
                        <code>
                            class ErrorBoundary extends React.Component {"{"}
                            <br />
                            &nbsp;&nbsp;constructor(props) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;this.state = {"{"} hasError: false {"}"};
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;static getDerivedStateFromError(error) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return {"{"} hasError: true {"}"};<br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;componentDidCatch(error, errorInfo) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;console.error("Error caught by Error Boundary:
                            ", error, errorInfo);
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;render() {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;if (this.state.hasError) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Something went
                            wrong.&lt;/h1&gt;;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return this.props.children;
                            <br />
                            &nbsp;&nbsp;{"}"}
                        </code>
                        <h2>Portals</h2>
                        <p>
                            Portals provide a way to render children into a DOM node that exists
                            outside the hierarchy of the parent component.
                        </p>
                        <code>
                            import ReactDOM from 'react-dom';
                            <br />
                            <br />
                            function MyPortal() {"{"}
                            <br />
                            &nbsp;&nbsp;return ReactDOM.createPortal(
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Content inside a
                            portal&lt;/div&gt;,
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('portal-root')
                            <br />
                            &nbsp;&nbsp;){"}"}
                        </code>
                    </article>
                </section>
                <section className="main-section" id="Testing">
                    <header>Testing</header>
                    <article>
                        <h2>Unit Testing</h2>
                        <p>
                            React components can be tested using Jest and React Testing Library.
                        </p>
                        <code>npm install --save-dev jest @testing-library/react</code>
                        <p>Example test for a component:</p>
                        <code>
                            import {"{"} render, screen {"}"} from '@testing-library/react';
                            <br />
                            import MyComponent from './MyComponent';
                            <br />
                            <br />
                            test('renders the component', () =&gt; {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;render(&lt;MyComponent /&gt;);
                            <br />
                            &nbsp;&nbsp;const linkElement = screen.getByText(/hello, world/i);
                            <br />
                            &nbsp;&nbsp;expect(linkElement).toBeInTheDocument();
                            <br />){"}"};
                        </code>
                        <h2>Integration Testing</h2>
                        <p>
                            Integration tests ensure that different parts of an application work
                            together as expected.
                        </p>
                        <p>Example:</p>
                        <code>
                            import {"{"} render, screen {"}"} from '@testing-library/react';&gt;
                            <br />
                            import App from './App';&gt;
                            <br />
                            <br />
                            test('renders the app and interacts correctly', () =&gt; {"{"}&gt;
                            <br />
                            &nbsp;&nbsp;render(&lt;App /&gt;);
                            <br />
                            &nbsp;&nbsp;// Add integration test steps here
                            <br />
                            {"}"});
                        </code>
                    </article>
                </section>
                <section className="main-section" id="Performance_Optimization">
                    <header>Performance Optimization</header>
                    <article>
                        <ul>
                            <li>Use React.memo to prevent unnecessary re-renders.</li>
                            <li>Split code with React.lazy and Suspense.</li>
                            <li>Optimize state management.</li>
                        </ul>
                        <p>Example:</p>
                        <code>
                            import React, {"{"} memo {"}"} from 'react';
                            <br />
                            <br />
                            const MyComponent = memo(function MyComponent({"{"} name {"}"}) {"{"}
                            <br />
                            &nbsp;&nbsp;return &lt;div&gt;Hello, {"{"}name{"}"}&lt;/div&gt;
                            <br />
                            {"}"}
                        </code>
                    </article>
                </section>
                <section className="main-section" id="Best_Practices">
                    <header>Best Practices</header>
                    <article>
                        <ul>
                            <li>Keep components small and focused.</li>
                            <li>Use functional components and hooks.</li>
                            <li>Maintain a clean and consistent code structure.</li>
                            <li>Use PropTypes or TypeScript for type checking.</li>
                            <li>Keep state as local as possible.</li>
                        </ul>
                    </article>
                </section>
                <section className="main-section" id="Resources">
                    <header>Resources</header>
                    <article>
                        <li>
                            <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">
                                Offcial React Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/facebook/react">
                                React GitHub Respository
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/community">React Community</a>
                        </li>
                    </article>
                </section>
                <p>
                    This documentation provides an overview of the key aspects of React. For
                    more detailed information, refer to the official React documentation and
                    other resources listed above.
                </p>
            </main>
        </>
        );}

                        export default App;
