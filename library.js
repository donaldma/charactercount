const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Johnathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = () => {
  console.log('=== All Playlists ===')
  for(let pl in library.playlists) {
    console.log(`${library.playlists[pl].id}: ${library.playlists[pl].name} - ${library.playlists[pl].tracks.length} tracks`);
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = () => {
  console.log('=== All Tracks ===')    
  for(let tr in library.tracks) {
    console.log(`${library.tracks[tr].id}: ${library.tracks[tr].name} by ${library.tracks[tr].artist} (${library.tracks[tr].album})`);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = (playlistId) => {
  console.log(`=== All Tracks for ${playlistId} ===`)      
  
  const pList = library.playlists[playlistId];
  //access parameter = playlistid (ex. p01)
  const pListTrack = library.playlists[playlistId].tracks;
  //access the track with the playlist
  
  console.log(`${pList.id}: ${pList.name} - ${pListTrack.length} tracks`);
  
  pListTrack.forEach(function(playlistId) {
    console.log(`${library.tracks[playlistId].id}: ${library.tracks[playlistId].name} by ${library.tracks[playlistId].artist} (${library.tracks[playlistId].album})`);
  });
  
}

// adds an existing track to an existing playlist

const addTrackToPlaylist = (trackId, playlistId) => {
  console.log(`=== Adding ${trackId} to ${playlistId}`)
  library.playlists[playlistId].tracks.push(trackId)
  console.log(library.playlists[playlistId])
}

// generates a unique id
// (use this for addTrack and addPlaylist)

const uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

const addTrack = (name, artist, album) => {
  console.log(`=== Adding ${name} by ${artist} (${album}) to track list ===`)
  library.tracks[uid()] = {
    id: uid(),
    name,
    artist,
    album
  }
  console.log(library.tracks)
}

// adds a playlist to the library

const addPlaylist = (name) => {
  console.log(`=== Adding playlist new playlist - ${name} ===`)  
  library.playlists[uid()] = {
    id: uid(),
    name
  }
  console.log(library.playlists)
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

const printSearchResults = (query) => {
  console.log(`=== Searching for \'${query}\' ===`)
  for(let track in library.tracks) {
    const lowerCaseQuery = query.toLowerCase()
    const lowerCaseName = library.tracks[track].name.toLowerCase()
    const lowerCaseArtist = library.tracks[track].artist.toLowerCase()
    const lowerCaseAlbum = library.tracks[track].album.toLowerCase()
    
    const nameSearch = lowerCaseName.search(lowerCaseQuery)
    const artistSearch = lowerCaseArtist.search(lowerCaseQuery)
    const albumSearch = lowerCaseAlbum.search(lowerCaseQuery)
    
    
    if(nameSearch === 0 || artistSearch === 0 || albumSearch === 0) {
      console.log(library.tracks[track])
    }
  }
}

printPlaylists();
printTracks();
printPlaylist("p01");
addTrackToPlaylist("t02", "p02")
addTrack('Best song ever', 'Donald', 'Best album ever')
addPlaylist('Best playlist ever')
printSearchResults('john')
