/** @jsx React.DOM */

var EpisodeRow = React.createClass({
  render: function() {
      return (
          <tr>
              <td>{this.props.episode.title}</td>
              <td><img className="img-responsive" src={this.props.episode.thumb_url_default}/></td>
              <td>{this.props.episode.views}</td>
              <td>{this.props.episode.created_on}</td>
          </tr>
      );
    }
});

var EpisodeTable = React.createClass({
    render: function() {
      var props = this.props;
      var rows = props.episodes
        .filter(function(episode) {
          return episode.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
        })
        .map(function(episode){
          return <EpisodeRow key={episode.title} episode={episode} />;
        });


      return (
          <div className="row spacer">
            <div className="col-lg-4 col-lg-offset-4">
              <table width="100%" className="table">
                  <thead>
                      <tr>
                          <th>Title</th>
                          <th>Image</th>
                          <th>Views</th>
                          <th>Created on</th>
                      </tr>
                  </thead>
                  <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
      );
    }
});

var SearchBar = React.createClass ({
  handleChange: function () {
    this.props.onFilterInput (
      this.refs.filterTextInput.getDOMNode().value
    );
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4">
          <div className="well">
            <h2 className="text-center">Youtube Playlist</h2>
            <input ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange} type="search" className="form-control" placeholder="Search for a video title..." />
          </div>
        </div>
      </div>
    );
  }
});

var FilterableEpisodeTable = React.createClass({
  getInitialState: function () {
    return {
      filterText: ""
    };
  },

  handleFilterInput: function(filterText) {
    this.setState({
      filterText: filterText
    })
  },

  render: function() {
    return (
      <div className="spacer">
        <SearchBar onFilterInput={this.handleFilterInput} filterText={this.state.filterText} />
        <EpisodeTable filterText={this.state.filterText} episodes={this.props.episodes} />
      </div>
    );
  }
});       

var episodes = [
{
  thumb_url_default:"https://yt3.ggpht.com/-T0H7xR-9iA8/AAAAAAAAAAI/AAAAAAAAAAA/VA9CSBc5Q8A/s88-c-k-no/photo.jpg",
  views:105689500,
  created_on:"2011-02-17T13:38:27Z",
  title:"psychicpebbles",
  id:"UC--BMyA2X4a9PGAo3lTuopg"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-Aqz_Yc964cU/AAAAAAAAAAI/AAAAAAAAAAA/0SkTB3eIHL8/s88-c-k-no/photo.jpg",
  views:229121344,
  created_on:"2007-08-18T14:57:17Z",
  title:"JustKiddingFilms",
  id:"UC-A4oZF4AlOEdlyZWBCI0cQ"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-0b9t8DHdd-8/AAAAAAAAAAI/AAAAAAAAAAA/5xlL-R1Id1M/s88-c-k-no/photo.jpg",
  views:25690295,
  created_on:"2006-07-05T08:01:16Z",
  title:"Blue Table Painting",
  id:"UC-aSLyvFLGEmNFcGomzL47w"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-_9beDwBjMJ4/AAAAAAAAAAI/AAAAAAAAAAA/Jv6rGoAyoz0/s88-c-k-no/photo.jpg",
  views:18483830,
  created_on:"2012-03-02T15:51:06Z",
  title:"dillongoo",
  id:"UC-B06UJxJ20HYv15lzrm9mA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-JqTiqHU5_Hs/AAAAAAAAAAI/AAAAAAAAAAA/oGryI3Ig5U4/s88-c-k-no/photo.jpg",
  views:197190215,
  created_on:"2008-06-18T06:44:13Z",
  title:"MoneySavingVideos",
  id:"UC-dch3BP4gKHC4cec0PU1PA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-o3Zx-Zz8bwA/AAAAAAAAAAI/AAAAAAAAAAA/ZHRS7TqQd8U/s88-c-k-no/photo.jpg",
  views:430715,
  created_on:"2006-08-03T11:22:11Z",
  title:"SPLURT TV",
  id:"UC-eeciTxV2kfY6teG3Hu_dQ"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-q03QTYLnRmM/AAAAAAAAAAI/AAAAAAAAAAA/6m7QYo0gRwA/s88-c-k-no/photo.jpg",
  views:790458,
  created_on:"2009-08-06T12:45:13Z",
  title:"Adozie",
  id:"UC-jDxvNUzbuFqDzRpAPbFYw"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-HozDGGP43lY/AAAAAAAAAAI/AAAAAAAAAAA/IKNqSHJZ4fw/s88-c-k-no/photo.jpg",
  views:16371,
  created_on:"2011-09-11T12:04:08Z",
  title:"TheNoahHunt",
  id:"UC-m0-lV8U6imr5zC-9RMlAA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-nheWDZWkuaY/AAAAAAAAAAI/AAAAAAAAAAA/UUarZMj10wk/s88-c-k-no/photo.jpg",
  views:7561518,
  created_on:"2008-01-22T01:00:40Z",
  title:"Karliene",
  id:"UC-QCyIGEY6DzNyQOnyxIaEg"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-QgxITA1sSog/AAAAAAAAAAI/AAAAAAAAAAA/-fpVz4fdImg/s88-c-k-no/photo.jpg",
  views:216964959,
  created_on:"2013-08-13T02:42:23Z",
  title:"RomanAtwoodVlogs",
  id:"UC-SV8-bUJfXjrRMnp7F8Wzw"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-qaWKaxiiuDc/AAAAAAAAAAI/AAAAAAAAAAA/0EoZzkJEUMc/s88-c-k-no/photo.jpg",
  views:460971,
  created_on:"2011-05-09T03:43:36Z",
  title:"Donovan Dustin",
  id:"UC-uzRXWfXKZWHDvTCAQRfWA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-xSoc6icoyM0/AAAAAAAAAAI/AAAAAAAAAAA/WzMp9TXtYek/s88-c-k-no/photo.jpg",
  views:55921,
  created_on:"2013-11-27T03:22:11Z",
  title:"Tab's Gaming Pad",
  id:"UC-vkS8J9ovJFA7krXkbA90w"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-qrD04Q_Asr0/AAAAAAAAAAI/AAAAAAAAAAA/IQmGgs75q7o/s88-c-k-no/photo.jpg",
  views:290726,
  created_on:"2011-10-12T03:13:19Z",
  title:"planethumanofficial",
  id:"UC-WMky94nwO2V0j3yWzJJ5g"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-X_LNAKWmetg/AAAAAAAAAAI/AAAAAAAAAAA/dPPK1tgp6H8/s88-c-k-no/photo.jpg",
  views:1786129,
  created_on:"2010-01-24T19:43:24Z",
  title:"vedrim",
  id:"UC-zKPn4jKeg_sEYjoOFe13w"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-Xjk-VC5VItM/AAAAAAAAAAI/AAAAAAAAAAA/rrBWC34Z7iA/s88-c-k-no/photo.jpg",
  views:7086046,
  created_on:"2008-06-19T03:52:00Z",
  title:"ABCD123toast",
  id:"UC04ytXliFP2zZpyFiZYvLQA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-i65yDNbvKjk/AAAAAAAAAAI/AAAAAAAAAAA/typlIFS918Q/s88-c-k-no/photo.jpg",
  views:23180487,
  created_on:"2009-09-12T11:04:24Z",
  title:"MattKeck",
  id:"UC04ZW2FS8RfUmJEa39_-JoA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-aXujGP8Dyzs/AAAAAAAAAAI/AAAAAAAAAAA/dSDxODBTGfI/s88-c-k-no/photo.jpg",
  views:666872,
  created_on:"2012-02-28T00:49:50Z",
  title:"Jesse Royal",
  id:"UC0CohPJt1XAP0sAKazrsxIQ"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-dQFcuLsbK20/AAAAAAAAAAI/AAAAAAAAAAA/r9hmz7DWVSg/s88-c-k-no/photo.jpg",
  views:294623,
  created_on:"2011-05-03T05:07:35Z",
  title:"Corrie Hegwood",
  id:"UC0cuBvfn-k0mFkPI9ZeF5vA"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-A_J7gPmZf-Q/AAAAAAAAAAI/AAAAAAAAAAA/n8yz1SmTU_k/s88-c-k-no/photo.jpg",
  views:643218,
  created_on:"2011-02-04T03:04:04Z",
  title:"laughspin",
  id:"UC0D3tWXruCZrBZqw0ojzqJQ"
},
{
  thumb_url_default:"https://yt3.ggpht.com/-MdLmmFh3qjo/AAAAAAAAAAI/AAAAAAAAAAA/lcGE1l_gam4/s88-c-k-no/photo.jpg",
  views:3106606,
  created_on:"2009-06-11T04:06:53Z",
  title:"Felicia Ricci",
  id:"UC0KJrVR7lOqDTkH2S2tjo5Q"
}];

var columns = [
{
  key: 'title',
  label: 'User',
},
{
  key: 'thumb_url_default',
  label: 'Image'
},
{
  key: 'views',
  label: 'Views'
},
{
  key: 'created_on',
  label: 'Created on'
},
];

var columnSorts = [
{
  column: 'title',
  sortFunction: Reactable.Sort.CaseInsensitive
},
'views',
{
  column: 'created_on',
  sortFunction: Reactable.Sort.Date
}
];

// React.render(<FilterableEpisodeTable episodes={episodes} />, document.getElementById('container'));


var Table = Reactable.Table,
    Tr = Reactable.Tr,
    Td = Reactable.Td;

var tableRows = [];
for(var i = 0; i < episodes.length; i++) {
  var episode = episodes[i];
  tableRows.push(
    <Tr>
      <Td column="title">
        {episode.title}
      </Td>
      <Td column="thumb_url_default">
        <img className="img-responsive" src={episode.thumb_url_default}/>
      </Td>
      <Td column="views">
        {episode.views}
      </Td>
      <Td column="created_on">
        {episode.created_on}
      </Td>
    </Tr>
  );
}

var doneRendering = function() {
  $('.reactable-filter-input').addClass('form-control').attr('placeholder', 'Search for a user');
};

React.render(
  <Table
    className="table"
    columns={columns}
    sortable={columnSorts}
    defaultSort={{column: 'title', direction: 'asc'}}
    filterable={['title']}>
    {tableRows}
  </Table>,
  document.getElementById('container'),
  doneRendering
);














