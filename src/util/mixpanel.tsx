const trackAutomaticEvents = true;
import {isObject} from 'lodash';
import {Mixpanel, MixpanelProperties} from 'mixpanel-react-native';

export const mixpanel = new Mixpanel(
  '965498dfbc9e91161f04e262104dd446',
  trackAutomaticEvents,
);
mixpanel.init();
export const mixpanelTrack = (
  eventName = '',
  properties?: MixpanelProperties,
) => {
  if (eventName?.length > 0) {
    let prop = undefined;
    if (properties) {
      prop = isObject(properties) ? properties : {properties};
    }
    console.log('[mixpanel] ', eventName, prop);
    mixpanel.track(eventName, prop);
  }
};
