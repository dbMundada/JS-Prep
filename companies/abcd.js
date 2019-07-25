/*
<div id="brinza-task-description">
<p>You would like to make a list of N top brand names based on user preferences. You are supplied with data about users containing <tt style="white-space:pre-wrap">id</tt> and <tt style="white-space:pre-wrap">gender</tt> information. The method of compiling the list of N top brand names is as follows:</p>
<blockquote><p>1. If the user specifies enough liked brands to cover the required N brands, then only this information should be used. Liked brands can be accessed by calling the function <tt style="white-space:pre-wrap">getLikedBrands(id)</tt>. If the user specifies more than N liked brands, then the first N brand names returned by <tt style="white-space:pre-wrap">getLikedBrands(id)</tt> should be used.</p></blockquote>
<blockquote><p>2. If the user doesn't mention enough liked brands, then the rest of the result list should be filled up with top brands for the user's gender. Such a list can be obtained by calling the function <tt style="white-space:pre-wrap">getTopBrandsForGender(gender)</tt>. If <tt style="white-space:pre-wrap">getTopBrandsForGender(gender)</tt> returns more brand names than are needed to complete the list, as many of the leading brand names as are needed should be used.</p></blockquote>
<blockquote><p>3. The order of the brand names in the result list should be the same as the order in the lists given by the functions, with brand names returned by <tt style="white-space:pre-wrap">getLikedBrands(id)</tt> listed first. Brand names returned by both functions together, <tt style="white-space:pre-wrap">getLikedBrands(id)</tt> and <tt style="white-space:pre-wrap">getTopBrandsForGender(gender)</tt>, should appear only once.</p></blockquote>
<p>Write a function:</p>
<tt style="white-space:pre-wrap">    function solution(U, N);</tt>
<p>that, given user U and the number of brand names N, returns a <tt style="white-space:pre-wrap">Promise</tt> that should either be:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>resolved with an array of exactly N top brand names of the given user, in the following format: <tt style="white-space:pre-wrap">["Some Brand Name", "Other Brand Name", ...]</tt>;</li>
</ul>
</blockquote><blockquote><ul style="margin: 10px;padding: 0px;"><li>or rejected with an <tt style="white-space:pre-wrap">CustomError</tt> with a message <tt style="white-space:pre-wrap">"Not enough data"</tt> (if there are fewer than N brand names to be listed, or both <tt style="white-space:pre-wrap">Promises</tt> <tt style="white-space:pre-wrap">getLikedBrands(id)</tt> and <tt style="white-space:pre-wrap">getTopBrandsForGender(gender)</tt> are rejected).</li>
</ul>
</blockquote><p>The user parameter is an object of the following structure: <tt style="white-space:pre-wrap">{ id: 123132, gender: "FEMALE" }</tt>, where <tt style="white-space:pre-wrap">id</tt> is an integer and <tt style="white-space:pre-wrap">gender</tt> is a string containing either <tt style="white-space:pre-wrap">"FEMALE"</tt> or <tt style="white-space:pre-wrap">"MALE"</tt>.</p>
<p>The functions <tt style="white-space:pre-wrap">getLikedBrands(id)</tt> and <tt style="white-space:pre-wrap">getTopBrandsForGender(gender)</tt>, used in the algorithm above, return <tt style="white-space:pre-wrap">Promise</tt>−s, that will be rejected with an <tt style="white-space:pre-wrap">CustomError</tt> or resolved with data in the following format:</p>
<tt style="white-space:pre-wrap">[
  { id: 123, name: "Some Brand Name" },
  { id: 456, name: "Other Brand Name" },
  ...
]</tt>
<p>For example, given user U, assume that <tt style="white-space:pre-wrap">getLikedBrands(U.id)</tt> returns <tt style="white-space:pre-wrap">[{1, "Logestyx"}, {10, "Gladlear"}]</tt> and <tt style="white-space:pre-wrap">getTopBrandsForGender(U.gender)</tt> returns <tt style="white-space:pre-wrap">[{6, "Burylaze Slapgalt"}, {1, "Logestyx"}, {7, "Izarpure"}]</tt>.</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>For N=1 your function should return a <tt style="white-space:pre-wrap">Promise</tt> which resolves with an array [<tt style="white-space:pre-wrap">"Logestyx"</tt>].</li>
</ul>
</blockquote><blockquote><ul style="margin: 10px;padding: 0px;"><li>For N=3 <tt style="white-space:pre-wrap">Promise</tt> should be resolved with an array [<tt style="white-space:pre-wrap">"Logestyx"</tt>, <tt style="white-space:pre-wrap">"Gladlear"</tt>, <tt style="white-space:pre-wrap">"Burylaze Slapgalt"</tt>].</li>
</ul>
</blockquote><blockquote><ul style="margin: 10px;padding: 0px;"><li>For N=5 <tt style="white-space:pre-wrap">Promise</tt> should be rejected with an <tt style="white-space:pre-wrap">CustomError</tt>.</li>
</ul>
</blockquote><p>The solution should be optimized for client-side (browser-based) performance, rather than back-end load. The expectation is that the developer will call both functions in parallel. Note that the example test-cases don't check for this, but the evaluation tests will check it.</p>
</div>
*/
'use strict';

/* global CustomError, getLikedBrands, getTopBrandsForGender */

// id, gender N top brands
// x = liked brands getLikedBrands(id).slice(0, N)
// x <= N -> Fill getTopBrandsForGender(gender)
// x<N reject('Not enough data')

function solution(U, N) {
    // U -> { id: 123132, gender: "FEMALE" }
    return new Promise((resolve, reject) => {
        // Resolve the promise with the result
    });
}


/*
<div style="height: 100%; overflow: auto;" id="standard_task_description" class="protected"><div class="task-description-content task-description__TaskContentWrapper-sc-380ibo-1 dHcaGh"><h2>Task description</h2>
<p>Your task is to implement a Web API that finds the best person for a job. The API should support the following requests:</p>
<ul>
<li>
<p><code>POST /candidates</code> – add a candidate to the database (kept in memory). The request body is JSON shaped, as follows:</p>
<pre><code class="language-json">{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "Jimmy Coder",
  "skills": [ "javascript", "es6", "nodejs", "express" ]
}
</code></pre>
<p>In the example above, the candidate has four skills.
The <code>Content-Type</code> header will be set to <code>application/json</code> in every such POST request.</p>
<p>The server should respond with a success code in the <strong>200–299</strong> range (for example, "200 OK" is fine). The response body is disregarded by the client and can be empty.</p>
</li>
<li>
<p><code>GET /candidates/search?skills=javascript,express,mongodb</code> – find and return the candidate that has <strong>the most skills from the given set</strong> (comma-separated). In this example, we request three skills. If a candidate possesses all of the listed skills (3 out of 3), or has more than the other candidates, then he/she is considered the best and should be returned. The response should have <code>Content-Type</code> set to <code>application/json</code> and the response body should be of the same shape as the request body for <code>POST /candidates</code>, that is:</p>
<pre><code class="language-json">{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "John Coder",
  "skills": [ "javascript", "es6", "nodejs", "express" ]
}
</code></pre>
<p>The HTTP response code must be <strong>200</strong> if a candidate is found with at least one matching skill, or <strong>404</strong> if no suitable candidates exist.</p>
</li>
<li>
<p>Added candidates should be kept in memory; no database/storage back-end is available.</p>
</li>
<li>
<p>Each <code>search</code> request should return the candidate with the best coverage of the requested skills – if five different skills are requested, then a candidate who has four of them is better than a candidate who has only three of them, and so on.</p>
</li>
<li>
<p>If two or more candidates have the same coverage (for example, both have seven out of ten requested skills), any of these candidates may be returned – additional skills (which were not requested) do not matter.</p>
</li>
<li>
<p>If no candidates match any skills, or no candidates exist at all, then the response must have an HTTP status code of <strong>404</strong>. The response body is not important in such cases.</p>
</li>
<li>
<p>If the request is invalid (has no body in the case of POST, or no <code>?skills=...</code> in GET) then status code <strong>400</strong> (Bad Request) must be returned.</p>
</li>
<li>
<p>HTTP <strong>5xx</strong> error codes are considered errors and must not be returned.</p>
</li>
</ul>
<h2>Input guarantees</h2>
<p>For simplicity, assume the following to be true:</p>
<ul>
<li>Each candidate has a unique <code>id</code> – the server will never receive two POSTs with the same <code>id</code>;</li>
<li><code>id</code> is any string from 1 to 100 characters;</li>
<li><code>name</code> is any string from 1 to 100 characters;</li>
<li><code>skills</code> is an array of strings from 1 to 100 characters, being letters, numbers or hyphens (<code>[a-zA-Z0-9-]+</code>), with a maximum of 10,000 elements); elements in the array or in query strings are not duplicated (there is no <code>[ "skill1", "skill2", "skill1" ]</code>).</li>
</ul>
<h2>Additional examples</h2>
<h3>Example 1</h3>
<p>With no candidates added, our request <code>GET /candidates/search?skills=javascript,react,typescript</code> should result in a 404 response code.</p>
<h3>Example 2</h3>
<p>If we add a candidate such as:</p>
<pre><code class="language-json">{
  "id": "person1",
  "name": "Amy Fish",
  "skills": [ "scala", "go" ]
}
</code></pre>
<p>then a search for <code>/candidates/search?skills=go,elixir,erlang</code> should return:</p>
<pre><code class="language-json">{
  "id": "person1",
  "name": "Amy Fish",
  "skills": [ "scala", "go" ]
}
</code></pre>
<h3>Example 3</h3>
<p>If we add two candidates:</p>
<ul>
<li><code>guy1</code> with skills <code>[ "nodejs", "mongodb", "redis", "socketio" ]</code></li>
<li><code>guy2</code> with skills <code>[ "nodejs", "express" ]</code></li>
</ul>
<p>then a search for skills <code>express,mongodb,redis</code> must return the data of <code>guy1</code>, since he possesses two skills from the list (<code>mongodb</code> and <code>redis</code>), while <code>guy2</code> knows only <code>express</code> from the list.</p></div></div>
*/

'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post('/candidates', function(req, res) {
  // ...
});

app.get('/candidates/search', function(req, res) {
  // ...
});

app.listen(process.env.HTTP_PORT || 3000);
