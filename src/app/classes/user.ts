import { MovieapiService } from '../services/movieapi.service';
import { WatchItem } from './watch-item';

export class User {
  public userId: string | undefined;
  public lastWatchedItems: WatchItem[] = [];
  public savedList: WatchItem[] = [];
  constructor(userId: string, private MovieApiService: MovieapiService) {
    this.userId = userId;
    this.addMockdata();
  }

  /**
   * mock function to generate content
   */
  addMockdata() {
    this.MovieApiService.fetchScienceFictionMovies().subscribe((e) => {
      let arr: any[] = e.results;
      let watchitemArr: WatchItem[] = [];

      arr.forEach((element) => {
        watchitemArr.push(new WatchItem(element.title, element.id, element));
      });
      this.savedList = watchitemArr.slice(0, 2);
    });
  }

  /**
   * adds Item to savedList
   * @param watchItem
   */
  addToList(watchItem: WatchItem) {
    if (this.savedList.includes(watchItem) == false) {
      this.savedList.push(watchItem);
    }
  }
}
