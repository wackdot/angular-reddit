import { 
  Component, 
  OnInit, 
  Input, 
  HostBinding 
} from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // In Angular, a component host is the element this component is attached to. We can set properties
  // on the host element by using the @HostBinding() decorator. In this case, we’re asking Angular to
  // keep the value of the host elements class to be in sync with the property cssClass.
  // HostBinding() the host element (app-article tag), attr.class means attribute.class of the host component
  // cssClass: The CSS class we want to apply to the "host" of this component
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  
  constructor() { 
  }

  voteUp(): boolean { // Relates to the component view
    this.article.voteUp(); // Relates to the model view
    return false; // JavaScript, by default, propagates the click event to all the parent components. Because the
                  // click event is propagated to parents, our browser is trying to follow the empty link, which tells the browser to reload.
                  // To fix that, we need to make the click event handler to return false. This will ensure the browser
                  // won’t try to refresh the page.
                  // Note: This view specific logic should be placed in the component/view instead of model 
                  // The additional logic only applies to this component/view and should not be added to the model
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
