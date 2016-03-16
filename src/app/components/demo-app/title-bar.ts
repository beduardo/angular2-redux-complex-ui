
import {Component, Input} from 'angular2/core'
import {RouterLink} from 'angular2/router'
import {LoadingIndicator} from '../loading-indicator/loading-indicator'
import {resetZurbFoundation} from '../../services/zurb-foundation-services'
import {AppStoreSubscriber, IAppStoreSubscriber} from '../../decorators/app-store-subscriber'

@Component({
    selector: 'title-bar',
    directives: [LoadingIndicator, RouterLink],
    templateUrl: 'app/components/demo-app/title-bar.html'
})
@AppStoreSubscriber()
export class TitleBar implements IAppStoreSubscriber {

    public isLoading: boolean = true
    public loadingMessage: string = 'Loading Images ...'

    public onInitAppStoreSubscription(source: any): void {
        return source
            .map((state: any) => state.imageData.isLoading)
            .subscribe((isLoading: boolean) => {
                this.isLoading = isLoading
            })
    }

    public ngAfterViewInit() {
        resetZurbFoundation(); // To initialize menu functionality
    }

}
