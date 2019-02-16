const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.userId = el.dataset.userId;
    this.followState = el.dataset.initialFollowState;
    this.$el = $(el);

    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow :(");
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId).then(() => {
        this.followState = "followed";
        debugger
        this.render();
      });
    } else {
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = "unfollowed";
        debugger
        this.render();
      });
    }
    
  }

  // handleClick() {
  //   this.$el.on('click', e => {
  //     e.preventDefault();
  //     if (this.followState === "unfollowed") {
  //       APIUtil.followUser(this.userId).then(this.success());
  //     } else /*if (this.followState === "followed") */{
  //       APIUtil.unfollowUser(this.userId).then(this.success());
  //     }
      
  //   });
  // }
}

module.exports = FollowToggle;