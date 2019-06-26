class Github {
    constructor() {
        this.client_id = '2e2b8319ad93da185080';
        this.client_secret = 'a8f77c3c09da43b1fb1de6b0c77ba99d4e6ede5f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
      
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
          profile,
          repos
      }
    }
}