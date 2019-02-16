const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      // data: {
      //   followState: this.followState
      // },
      dataType: 'JSON'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      // data: {
      //   followState: this.followState
      // },
      dataType: 'JSON'
    });
  }
}

module.exports = APIUtil;