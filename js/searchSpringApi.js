class SearchSpringAPI {
  //because the site id can be changed in future implementations
  constructor(siteId = "scmq7n", resultsFormat = "native") {
    this.siteId = siteId;
    this.resultsFormat = resultsFormat;
  }

  //static properties
  static resultsPerPageDefault = 24;

  static options = { method: "GET", headers: { accept: "application/json" } };

  //using this function for each request
  search = async (
    query,
    page = 1,
    resultsPerPage = this.resultsPerPageDefault,
    filter = ""
  ) => {
    console.log(GlobalStateManager.retrieve("currentSearch") + `&rq=${query}`);
    let response = await fetch(
      GlobalStateManager.retrieve("currentSearch") + `&rq=${query}`,
      SearchSpringAPI.options
    );
    let json = response.json();
    let results = json;
    return results;
  };
}
