declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to fetch all posts via a network request.
     * @param method The HTTP method (e.g., 'GET', 'POST', etc.)
     * @param url The URL to make the request to
     * @returns A Chainable Cypress object wrapping the response body
     */
    getAllPosts(method: string, url: string): Chainable<any>;

    /**
     * Custom command to fetch the first post via a network request.
     * @param method The HTTP method (e.g., 'GET', 'POST', etc.)
     * @param url The URL to make the request to
     * @returns A Chainable Cypress object wrapping the first post in the response body
     */
    getFirstPost(method: string, url: string): Chainable<any>;
  }
}
