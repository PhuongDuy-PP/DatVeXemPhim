import React from 'react';
import Image from '../../../assets/images/typography.png';

export default function Typography(props) {
    return (
        <div>
            <div>
                <main className="mx-7 lg:mx-6  flex-grow">
                    <article className="pt-32 max-w-5xl mx-auto">
                        <header className="mb-14">
                            <h1 className="text-3xl text-center font-bold leading-normal text-gray-900 mt-0 mb-3">Typography</h1>
                            <div className="text-center">Published on 21 June 2020 08:04 AM</div>
                            <div className="mt-3 text-center">
                                <a href="/tags/popular" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-0.5">#popular</a>
                                <a href="/tags/sample" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-0.5">#sample</a>
                            </div>
                            <div className="mt-10 -mx-7 md:mx-0">
                                <img 
                                    className="w-full max-w-2xl mx-auto" 
                                    src={Image} width={960} height={500} alt="This post thumbnail" />
                            </div>
                        </header>
                        <div id="content" className="prose text-gray-800 max-w-none">
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <p>Nunc tristique velit ligula. Phasellus vel massa a lorem facilisis interdum ut ac erat. Sed convallis a nisi non elementum. Vivamus ac ultricies dolor. Fusce in erat rhoncus, ultrices ante placerat, vulputate odio. Aliquam porta varius enim vitae tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur augue mauris, in scelerisque mauris dictum nec. Pellentesque a venenatis est. Curabitur ut quam tempus, dictum elit nec, vehicula dui. Nunc vestibulum lorem ac finibus consequat.</p>
                            <h1 className="text-6xl">Heading 1</h1>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h2 className="text-5xl">Heading 2</h2>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h3>Heading 3</h3>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h4>Heading 4</h4>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h5>Heading 5</h5>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h6>Heading 6</h6>
                            <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                            <h2>Typography</h2>
                            <p>Lid est laborum et dolorum fuga, This is <a href="http://example.com/" title="Title">an example</a> inline link. Et harum quidem rerum facilis, <strong>This is bold</strong> and <em>emphasis</em> cumque nihilse impedit quo minus id quod amets untra dolor amet sad. While this is <code>code block()</code> and following is a <code>pre</code> tag</p>
                            <pre><code>print 'this is pre tag'{"\n"}</code></pre>
                            <p>Following is the syntax highlighted code block</p>
                            <pre><code className="language-go">func getCookie(name string, r interface{"{"}{"}"}) (*http.Cookie, error) {"{"}{"\n"}{"\t"}rd := r.(*http.Request){"\n"}{"\t"}cookie, err := rd.Cookie(name){"\n"}{"\t"}if err != nil {"{"}{"\n"}{"\t"}{"\t"}return nil, err{"\n"}{"\t"}{"}"}{"\n"}{"\t"}return cookie, nil{"\n"}{"}"}{"\n"}{"\n"}func setCookie(cookie *http.Cookie, w interface{"{"}{"}"}) error {"{"}{"\n"}{"\t"}// Get write interface registered using `Acquire` method in handlers.{"\n"}{"\t"}wr := w.(http.ResponseWriter){"\n"}{"\t"}http.SetCookie(wr, cookie){"\n"}{"\t"}return nil{"\n"}{"}"}{"\n"}</code></pre>
                            <p>This is blockquote, Will make it <em>better now</em></p>
                            <blockquote>
                                <p>'I want to do with you what spring does with the cherry trees.' ~ Pablo Neruda</p>
                            </blockquote>
                            <blockquote>
                                <p>Et harum quidem <em>rerum facilis</em> est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit</p>
                            </blockquote>
                            <p>Unordered list</p>
                            <ul>
                                <li>Red</li>
                                <li>Green</li>
                                <li>Blue</li>
                            </ul>
                            <p>Ordered list</p>
                            <ol>
                                <li>Red</li>
                                <li>Green</li>
                                <li>Blue</li>
                            </ol>
                            <h2>Tables</h2>
                            <p>Tables aren't part of the core Markdown spec, but we supports supports them out-of-the-box.</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bob</td>
                                        <td>27</td>
                                    </tr>
                                    <tr>
                                        <td>Alice</td>
                                        <td>23</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Inline Markdown within tables</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Inline</th>
                                        <th>Markdown</th>
                                        <th>In</th>
                                        <th>Table</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><em>italics</em></td>
                                        <td><strong>bold</strong></td>
                                        <td><s>strikethrough</s></td>
                                        <td><code>code</code></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </main>
                <footer className="mt-20 px-10 py-8 bg-gray-200">
                    <div className="max-w-5xl mx-auto text-gray-700 text-center">
                        © 2020 <a href="/" className="font-medium" target="_blank" rel="noopener">Vredeburg</a>.
                        Made by <a href="https://github.com/dafiulh" target="_blank" rel="noopener">Dafiul Haq</a>
                        using <a href="https://www.11ty.dev" target="_blank" rel="noopener">Eleventy</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener">Tailwind CSS</a>.
                    </div>
                </footer>
            </div>

        </div>
    );
}