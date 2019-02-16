const FollowToggle = require('./follow_toggle.js');

$(() => {
  let $toggles = $( '.follow-toggle' );

  $toggles.each( (idx, el) => {
      new FollowToggle(el);
    });
});




  