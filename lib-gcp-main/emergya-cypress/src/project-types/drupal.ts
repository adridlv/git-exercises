import Common from './common';
import { LoginPageObject, ContentPageObject, RedirectPageObject } from '../pages/drupal/index';

// eslint-disable-next-line import/prefer-default-export
class Drupal extends Common {
  private static drupal: Drupal;

  login: LoginPageObject = new LoginPageObject();

  content: ContentPageObject = new ContentPageObject();

  redirect: RedirectPageObject = new RedirectPageObject(Drupal.drupal);

  static getInstance(): Drupal {
    if (!Drupal.drupal) {
      Drupal.drupal = new Drupal();
    }

    return Drupal.drupal;
  }
}

export default Drupal;
