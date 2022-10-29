import Layout from "../components/Layout";

const projects = () => {
    return ( 
        <Layout title="Projects"> 
             <div>
            <h1>Welcome to the Projects Page.</h1>
        </div>
        <div>
            <h1>
            Here are some of the Hacktoberfest projects you can contribute to:
            </h1>
        </div>

        {/* PHP */}
        <div>
            <h3>PHP</h3>
            <p>
                <li><a href="https://github.com/OSCA-Kampala-Chapter/nasoma">Nasoma</a></li>
                <li><a href="https://github.com/OSCA-Kampala-Chapter/laba-image">laba-image</a></li>
                <li><a href="https://github.com/cimengineering/simple-redis-dal">simple-redis-dal</a></li>
                <li><a href="https://github.com/kusaasira/uganda-geo-data">uganda-geo-data</a></li>
                <li><a href="https://github.com/ogwok/mtn-momo">mtn-momo</a></li>
                <li><a href="https://github.com/stuartelimu/vaccination-centres">vaccination-centres</a></li>
            </p>
        </div>

        {/* Javascript */}
        <div>
            <h3>Javascript</h3>
            <p>
                <h4>AirQo-frontend - adding cypress tests</h4>
            <li><a href="https://github.com/airqo-platform/AirQo-frontend">AirQo-frontend</a></li>
            <li><a href="https://github.com/javaScriptKampala/developer-directory">developer-directory</a></li>
            <li><a href="https://github.com/javaScriptKampala/hacktoberfest-uganda ">hacktoberfest-uganda </a></li>
            
            </p>
        </div>

        {/* Open Source */}
        <div>
            <h3>Open Source</h3>
            <p>
            <li><a href="https://github.com/OSCA-Kampala-Chapter/oscakampala-website-backend">Oscakampala-website-backend</a></li>
            <li><a href="https://github.com/oscakampala/oscakampala.github.io ">oscakampala.github.io </a></li>
            </p>
        </div>

        {/* Python */}
        <div>
            <h3>Python</h3>
            <p>
            <li><a href="https://github.com/OSCA-Kampala-Chapter/autobot ">AutoBot</a></li>
            </p>
        </div>
        </Layout>
       
     );
}
 
export default projects;
