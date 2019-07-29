export enum NySections {
  ALL = 'all-sections'
}
export enum NyPeriods {
  DAY = '1',
  WEEK = '7',
  MONTH = '30'
}

export class NyTimesService {
  private apiKey = 'Chom0VvAYApKdJYAfCoXGVADl9t0r3Ny';
  private apiUrl = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed';

  createUrl(section: NySections, period: NyPeriods) {
    return `${this.apiUrl}/${section}/${period}.json?api-key=${this.apiKey}`;
  }
  fetchData(section: NySections, period: NyPeriods) {
    return fetch(this.createUrl(section, period))
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.fault) {
          throw result.fault.faultstring;
        } else {
          return result;
        }
      });
  }
}
