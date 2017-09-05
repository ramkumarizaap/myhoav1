angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
    // Open the login modal
  $scope.logout = function() {
    $state.go("app.login",{},{reload:true});
  };

})

.controller('HomeCtrl', function($q,$rootScope,$scope,$ionicModal,$cordovaImagePicker,$rootScope,$cordovaCapture,$ionicActionSheet,HomeService,$cordovaFileTransfer,$cordovaCamera,$ionicPopup,$ionicLoading,$timeout) {
  $scope.feed = {};
  $scope.feed.img = "";
  $scope.type = "";
  var comments = "";
  
  $scope.commentip = {message:null};
  $rootScope.imgthumb = "";$rootScope.videothumb = "";
  $rootScope.userdetails = JSON.parse(sessionStorage.getItem('userdetails'));
  $ionicModal.fromTemplateUrl('./templates/post-feed.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $ionicModal.fromTemplateUrl('./templates/comments.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      comments = modal;
    });
    
  $scope.getFeed = function()
  {
    $ionicLoading.show();
    HomeService.getFeed("1").success(function(data){
      $scope.feeds = data.msg;
      $scope.numberOfItemsToDisplay = 2;
      $scope.noMoreItemsAvailable = false;
      $ionicLoading.hide();
    }).error(function(data){
      $ionicLoading.hide();
      $scope.feeds= [];
      $scope.noMoreItemsAvailable = true;
      $ionicPopup.alert({title:"No Feeds!",template:data.msg});
    });
  }
  $scope.getFeed();
  // $scope.feeds = [{},{},{}];
  $scope.doRefresh = function()
  {
    $scope.getFeed();
    $timeout(function() {
       $scope.$broadcast('scroll.refreshComplete');
     }, 3000);
  }

  $scope.showPostFeed = function ()
  {
    $scope.modal.show();
  };
  $scope.closePostFeed = function()
  {
    $scope.modal.hide();
  };
  $scope.removePhoto = function() 
  {
    $scope.feed.img = "";$rootScope.videothumb = "";$rootScope.imgthumb="";
  }
  $scope.getImage = function ()
  {
    $scope.feed.img =  "";$rootScope.videothumb =  "";
     var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Take New Photo' },
           { text: 'Choose From Gallery' },
         
         ],
         buttonClicked: function(index) 
         {
            if(index==0)
            {
              var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.FILE_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.PNG,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  $scope.feed.img =  imageData;
                  $rootScope.imgthumb = imageData;
                  $scope.type = "image";
                }, function(err) {
                  $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
                });
            }
            else
            {
              var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.FILE_URL,
                  sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.PNG,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  $scope.feed.img =  imageData;
                  $rootScope.imgthumb = imageData;
                  $scope.type = "image";
                }, function(err) {
                  $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
                });
            }
            return true;
         }
       });
  };
  
  $scope.getVideo = function()
  {
    $scope.feed.img =  "";$rootScope.imgthumb =  "";
     var hideSheet1 = $ionicActionSheet.show({
         buttons: [{ text: 'Take New Video' },{ text: 'Choose From Gallery' },],
         buttonClicked: function(index) 
         {
            if(index==0)
            {
              var options = { limit: 1, duration: 5 };
              $cordovaCapture.captureVideo(options).then(function(videoData) {
                  $rootScope.videothumb = videoData[0].fullPath;
                  $scope.feed.img = videoData[0].fullPath;
                }, function(err) {
                    $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
                });
            }
            else if(index==1)
            {
              var options = {
                    quality: 100,
                    destinationType: Camera.DestinationType.FILE_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    mediaType:Camera.MediaType.VIDEO,
                    allowEdit: false,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false,
                    correctOrientation:false
                  };
                  $cordovaCamera.getPicture(options).then(function(videoData) {
                    $scope.feed.img =  videoData;
                    $rootScope.videothumb =  videoData;
                    $scope.type = "video";
                  }, function(err) {
                    $ionicPopup.alert({title:"Error!",template:"Something went wrong!"});
                  });
            }
            return true;
        }
      });
    }

  $scope.postfeed = function ()
  {    
    $scope.feed.user_id = userdetails.id;
    $ionicLoading.show();
    HomeService.postfeed($scope.feed).success(function(data){
      $ionicLoading.hide();
      if($scope.feed.img!='')
      {
        $ionicLoading.show({template:"Uploading file please wait..."});
        uploadFile($scope.feed.img,userdetails.id,$scope.type,data.row_id).then(function(res){
          $ionicLoading.hide();
          if(res=="true" || res==true)    
          {
            $ionicPopup.alert({title:"Post Success!",template:data.msg}).then(function(data){
              $scope.closePostFeed();
              $scope.feed = {};$scope.feed.img = "";$scope.type = "";
              $scope.doRefresh();
            });
          }
          else
          {
            $ionicPopup.alert({title:"Post Failed!",template:data.msg}).then(function(data){
              $scope.closePostFeed();
              $scope.feed = {};$scope.feed.img = "";$scope.type = "";
              $scope.doRefresh();
            });
          }
        });
      }
      else
      {
        $ionicPopup.alert({title:"Post Success!",template:data.msg}).then(function(data){
          $ionicLoading.hide();
          $scope.closePostFeed();
          $scope.feed = {};$scope.feed.img = "";$scope.type = "";
          $scope.doRefresh();
        });
      }
    }).error(function(data){
      $ionicLoading.hide();
      $ionicPopup.alert({title:"Post Failed!",template:data.msg});
    });
  }
  $scope.playVideo = function(url)
  {
    window.plugins.streamingMedia.playVideo(url);
  }

  $scope.showComment = function(stream_id)
  {
    $scope.getComments(stream_id);
    comments.show();
  };
  $scope.closeComments = function()
  {
    comments.hide();
    $scope.getFeed();
  };
  $scope.getComments = function(stream_id)
  {
    $scope.str_id = stream_id;
    $ionicLoading.show();
    HomeService.getComments(stream_id).success(function(data){
      $ionicLoading.hide();
      $scope.comments = data.msg;
    })
    .error(function(){
      $ionicLoading.hide();
      $ionicPopup.alert({title:"Error!",template:"No Comments found."});
    });
  }
  $scope.postcomment = function(comment,id)
  {
    $ionicLoading.show();
    HomeService.postComment(comment.message,id,userdetails.id).success(function(data){
        $ionicLoading.hide();
        $scope.commentip.message = "";
      $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(data){
        $scope.getComments(id);
      });
    })
    .error(function(data){
      $ionicLoading.hide();
      $ionicPopup.alert({title:"Error!",template:data.msg});
    });
  }
  $scope.postlike = function(id)
  {
    $ionicLoading.show();
    HomeService.postLike(id,userdetails.id).success(function(data){
        $ionicLoading.hide();
      // $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(data){
        $scope.getFeed();
      // });
    })
    .error(function(data){
      $ionicLoading.hide();
      $ionicPopup.alert({title:"Error!",template:data.msg});
    });
  }

  var uploadFile = function(mediaFile,user_id='',type='',row_id='')
  {
    var deferred = $q.defer();
    var path = mediaFile;
     var url = encodeURI("http://162.144.41.156/~izaapinn/ram/action.php");
     //File for Upload
     var targetPath = path;
     //var params = {};
     // File name only
     var filename = targetPath.split("/").pop();
     var options = {
         fileKey: "file",
         fileName: filename,
        chunkedMode: false,
        params : {'user_id':user_id,'action':"feedupload",type:type,row_id:row_id}
     };
     $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
        deferred.resolve('true');
     }, function (err) {
         deferred.reject('false');
     }, function (progress) {
         // PROGRESS HANDLING GOES HERE
     });  

     return deferred.promise;
  }

  /*Start Feeds Load More Functionality */
  $scope.numberOfItemsToDisplay = 2;
  $scope.loadMore = function() {
    $ionicLoading.show();
    $scope.noMoreItemsAvailable = false;
    $timeout(function() {
      $ionicLoading.hide();
      $scope.numberOfItemsToDisplay += 1;
      if($scope.feeds.length == $scope.numberOfItemsToDisplay)
      {
        $scope.noMoreItemsAvailable = true;
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, 3000);
    // alert($scope.feeds.length);
  };


})

.controller('LoginCtrl', function($scope,$state, $rootScope,$stateParams,$ionicLoading,$ionicPopup,$timeout,LoginService,$http) {
  $scope.login = {};
  $scope.doLogin = function(form,values){
    if(form.$valid)
    {
      $ionicLoading.show();
      LoginService.login(values).success(function(data){
        $ionicLoading.hide();
        sessionStorage.setItem('userdetails',JSON.stringify(data.msg));
        $state.go("app.home",{},{reload:true});
      }).error(function(data){
        $ionicLoading.hide();
          $ionicPopup.alert({title:"Login Failed!",template:data.msg});
      });
    }
  }

})

.controller('RegisterCtrl', function($scope,$state,$rootScope, $stateParams,$ionicLoading,$ionicPopup,$timeout,$cordovaCamera,$ionicActionSheet, $cordovaImagePicker,RegisterService,$cordovaFileTransfer) {
  $scope.register = {};
  $scope.communityok = "false";
  $scope.community = {};
  $scope.register.img = "img/fresh-upload.png";
  $scope.checkCommunity = function(form,values)
    {
      if(form.$valid)
      {
        $ionicLoading.show();
        RegisterService.checkCommunity(values).success(function(data){
          $scope.communityok = "true";
          $ionicLoading.hide();
        }).error(function(data){
          $ionicLoading.hide();
          $ionicPopup.alert({title:"Error!",template:data.msg});
        });
      }
    };
  $scope.UploadPhoto = function()
  {
      var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Take New Photo' },
           { text: 'Choose From Gallery' },
         
         ],
         buttonClicked: function(index) {

            if(index==0)
            {
              var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.DATA_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.PNG,
                  targetWidth: 100,
                  targetHeight: 100,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  var image = document.getElementById('myImage');
                  $scope.register.img = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                  // error
                });
            }
            else
            {

                var options = {
                 maximumImagesCount: 1,
                 width: 100,
                 height: 100,
                 quality: 100
                };
               $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                  for (var i = 0; i < results.length; i++) {
                    $scope.register.img = results[i];
                  }
                }, function(error) {
                  // error getting photos
                });
            }
          return true;
         }
       });
  }

  $scope.doRegister = function(form,values)
  {
    // alert(JSON.stringify($scope.register));
    if(form.$valid)
    {
      $scope.register.communitycode = $scope.community.communitycode;
      $ionicLoading.show();
      RegisterService.RegisterUser(values).success(function(data){
        $ionicLoading.hide();
        uploadFile($scope.register.img,data.user_id);
        $ionicPopup.alert({title:"Registration Success!",template:data.msg}).then(function(){
          $state.go("app.login",{},{reload:true});
        });
      })
      .error(function(data)
      {
        $ionicLoading.hide();
        $ionicPopup.alert({title:"Registration Failed!",template:data.msg});
      });
    }
  }

  function uploadFile(mediaFile,user_id='')
  {
    var path = mediaFile;
     var url = encodeURI("http://162.144.41.156/~izaapinn/ram/action.php");
     //File for Upload
     var targetPath = path;
     //var params = {};
     // File name only
     var filename = targetPath.split("/").pop();
     var options = {
         fileKey: "file",
         fileName: filename,
        chunkedMode: false,
        params : {'user_id':user_id,'action':"profile"} // directory represents remote directory,  fileName represents final remote file name
     };
     $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
       // alert("SUCCESS: " + JSON.stringify(result));
     }, function (err) {
        // alert("ERROR: " + JSON.stringify(err));
     }, function (progress) {
         // PROGRESS HANDLING GOES HERE
     });  
  }

  })

.controller('InvoiceCtrl', function($scope,$state, $stateParams,$ionicModal,$ionicLoading,$ionicPopup,$timeout,$cordovaCamera,$ionicActionSheet, $cordovaImagePicker,InvoiceService,$cordovaFileTransfer){


})
.controller('ClassifiedsCtrl', function($q,$scope,$state,$rootScope, $stateParams,$ionicModal,$ionicLoading,$ionicPopup,$timeout,$ionicActionSheet,ClassifiedService,$cordovaGeolocation,$cordovaImagePicker,$cordovaFileTransfer){
  $scope.classified = {};$scope.classifieds = [];
  $scope.images = [];
  $scope.items = [];
  $scope.noMoreItemsAvailable = false;
  $scope.classified.img = "img/fresh-upload.png";
  if($state.current.name == "app.classified" && $stateParams.Id!='')
  {
    ClassifiedService.getClassifiedById($stateParams.Id).success(function(data){
        $scope.classy = data.msg;
        $scope.items = data.msg.photo;
        var lat = data.msg.latitude;
        var long = data.msg.longitude;
        var options = {timeout: 10000, enableHighAccuracy: true};
        var latLng = new google.maps.LatLng(lat,long); 
        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        google.maps.event.addListenerOnce($scope.map, 'idle', function(){ 
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng
          }); 
          var infoWindow = new google.maps.InfoWindow({
              content: data.msg.adname
          });
          google.maps.event.addListener(marker, 'click', function () {
              infoWindow.open($scope.map, marker);
          });
        });
      }).error(function(data){
        $ionicPopup.alert({title:"Error!",template:"Can't get classifieds"});
    });
  }
  $scope.getClassified = function()
  {
    
    $ionicLoading.show();
    ClassifiedService.getClassified().success(function(data){
      $scope.classifieds = data.msg;
      $scope.numberOfItemsToDisplay = 8;
      $scope.noMoreItemsAvailable = false;
      $ionicLoading.hide();
    }).error(function(data){
      $ionicLoading.hide();
      $scope.classifieds= [];
      $scope.noMoreItemsAvailable = true;
      $ionicPopup.alert({title:"No Classifieds!",template:data.msg});
    });
  }
  if($state.current.name == "app.classifieds")
    $scope.getClassified();

  $ionicModal.fromTemplateUrl('./templates/add-classified.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showPostClassified = function()
  {
    $scope.modal.show();
  }
  $scope.closePostClassified = function()
  {
    $scope.modal.hide();
  };
  $scope.addImage = function()
  {
    var pick = {maximumImagesCount: 5,quality: 100};
     $cordovaImagePicker.getPictures(pick)
      .then(function (results) {
        for (var i = 0; i < results.length; i++) {
          $scope.images[i] = results[i];
        }
      }, function(error) {
          $ionicPopup.alert({title:"Error!",template:"Can't get Images."});
      });
  }

  $scope.doClassified = function(form,values)
  {
    if(form.$valid)
    {
      $ionicLoading.show();
      ClassifiedService.postClassified(values).success(function(data){
        uploadFile($scope.images,data.row_id).then(function(res){
          $ionicLoading.hide();
          if(res==true || res=="true")
            $ionicPopup.alert({title:"Image Upload",template:"Images uploaded successfully."}).then(function(res1){
              $ionicLoading.hide();
              $ionicLoading.show();
              $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(res2){
                $ionicLoading.hide();
                $scope.closePostClassified();
                $scope.doRefresh();
              });
            });
        });
      })
      .error(function(data){
        $ionicLoading.hide();
        $ionicPopup.alert({title:"Error!",template:data.msg});
      });
    }
  }
  $scope.doRefresh = function()
  {
    $scope.getClassified();
    $timeout(function() {
       $scope.$broadcast('scroll.refreshComplete');
     }, 3000);
  }

  var uploadFile = function(mediaFile,row_id='')
  {

    for (var i = 0; i < mediaFile.length; i++)
    {
      var deferred = $q.defer();
      var path = mediaFile[i];
       var url = encodeURI("http://162.144.41.156/~izaapinn/ram/action.php");
       //File for Upload
       var targetPath = path;
       //var params = {};
       // File name only
       var filename = targetPath.split("/").pop();
       var options = {
           fileKey: "file",
           fileName: filename,
          chunkedMode: false,
          params : {'action':"classifiedupload",row_id:row_id}
       };
       $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
          
        }, function (err) {
           deferred.reject('false');
       }, function (progress) {
           $ionicLoading.show({template:"Uploading Images "+i});
       });
    }
    if(i==mediaFile.length)
      deferred.resolve('true');
    else
      deferred.reject('false');
      return deferred.promise;
  }

  $scope.numberOfItemsToDisplay = 8;
  $scope.loadMore = function() {
    $ionicLoading.show();
    $scope.noMoreItemsAvailable = false;
    $timeout(function() {
      $ionicLoading.hide();
      $scope.numberOfItemsToDisplay += 1;
      if($scope.classifieds.length <= $scope.numberOfItemsToDisplay)
      {
        $scope.noMoreItemsAvailable = true;
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, 3000);
    // alert($scope.feeds.length);
  };

})
.controller('InboxCtrl', function($q,$rootScope,$stateParams,$state,$scope,$ionicModal,$cordovaImagePicker,$rootScope,$cordovaCapture,$ionicActionSheet,InboxService,$cordovaFileTransfer,$cordovaCamera,$ionicPopup,$ionicLoading,$timeout) {
  $scope.reply = {};$scope.inbox = {};
  $scope.remicon=false;
  $scope.messages = [];
  $scope.items = [];
  var userdetails = JSON.parse(sessionStorage.getItem('userdetails'));
  $scope.reply.img = "img/fresh-upload.png";

  $scope.getInbox = function()
  {
    $ionicLoading.show();
    InboxService.getInbox(userdetails.id).success(function(data){
      $ionicLoading.hide();
      $scope.messages = data.msg;
    })
    .error(function(data){
      $ionicLoading.hide();
      $ionicPopup.alert({title:"Error!",template:data.msg});
    });
  };
  if($state.current.name=="app.inbox")
  {
    $scope.getInbox();  
  }

  if($stateParams.Id!='' && $state.current.name=="app.viewmessage")
  {
    $scope.reply.reply_id = $stateParams.Id;
    $scope.InboxById = function()
    {
      $ionicLoading.show();
      InboxService.getInboxById($scope.reply.reply_id).success(function(data){
        $ionicLoading.hide();
        $scope.items = data.msg;
      })
      .error(function(data){
        $ionicLoading.hide();
        $ionicPopup.alert({title:"Error!",template:data.msg});
      });
    }
    $scope.InboxById();
  }
  $scope.remImage = function()
  {
    $scope.reply.img = "img/fresh-upload.png";
    $scope.remicon=false;
  }
  $scope.showAttach = function()
  {
     var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Take New Picture' },
           { text: 'Choose From Gallery' },
         
         ],
         buttonClicked: function(index) 
         {
            if(index==0)
            {
              var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.FILE_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.PNG,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  $scope.reply.img =  imageData;
                  $scope.remicon=true;
                }, function(err) {
                  $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
                });
            }
            else
            {
              var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.FILE_URL,
                  sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.PNG,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  $scope.reply.img =  imageData;
                  $scope.remicon=true;
                }, function(err) {
                  $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
                });
            }
            return true;
         }
       });
  };
  $scope.doReply = function(form,values)
  {
    if(form.$valid && values.description!='')
    {
      $scope.reply.user_id = userdetails.id;
      $ionicLoading.show();
      InboxService.replyMessage(values).success(function(data){
        if($scope.reply.img!='' && $scope.reply.img!='img/fresh-upload.png')
        {
          uploadFile($scope.reply.img,$scope.reply.reply_id).then(function(res){
            $ionicLoading.hide();
            $ionicPopup.alert({title:"Success!",template:data.msg});
          });
        }
        else
        {
          $ionicLoading.hide();
          $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(){
            $scope.InboxById();
          });
        }
        $scope.reply.description = "";
      })
      .error(function(){
        $ionicLoading.hide();
        $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
      });
    }
    else
    {
      $ionicPopup.alert({title:"Error!",template:"Please Enter Message"});
    }
  };

  $scope.doCompose = function(form,values)
  {
    if(form.$valid)
    {
      $scope.inbox.user_id = userdetails.id;
      $ionicLoading.show();
      InboxService.composeMessage(values).success(function(data){
        uploadFile($scope.reply.img,data.row_id).then(function(res){
          $ionicLoading.hide();
          $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(){
            $state.go("app.inbox");
          });
        });
      })
      .error(function(data){
        $ionicLoading.hide();
         $ionicPopup.alert({title:"Error!",template:"Something went wrong."});
      });
    }
  };

   var uploadFile = function(mediaFile,row_id='')
   {
      var deferred = $q.defer();
      var path = mediaFile;
       var url = encodeURI("http://162.144.41.156/~izaapinn/ram/action.php");
       //File for Upload
       var targetPath = path;
       //var params = {};
       // File name only
       var filename = targetPath.split("/").pop();
       var options = {
           fileKey: "file",
           fileName: filename,
          chunkedMode: false,
          params : {'action':"inboxupload",row_id:row_id}
       };
       $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
          deferred.resolve('true');
       }, function (err) {
           deferred.reject('false');
       }, function (progress) {
           $ionicLoading.show({template:"Uploading Image..."});
       });
       return deferred.promise;
    };

})
.controller('EventsCtrl', function($q,$rootScope,$stateParams,$state,$scope,$ionicModal,$cordovaImagePicker,$rootScope,$cordovaCapture,$ionicActionSheet,EventsService,$cordovaFileTransfer,$cordovaCamera,$ionicPopup,$ionicLoading,$timeout,$cordovaDatePicker) {
  $scope.event = {};
  $scope.event = {from_date:"",to_date:"",from_time:"",to_time:""};
  $scope.response = "";
  var userdetails = JSON.parse(sessionStorage.getItem('userdetails'));
  if($stateParams.Id!="" && $state.current.name=="app.viewevent")
  {
    $scope.showRespond = function()
    {
      var hideSheet = $ionicActionSheet.show({
          titleText:"Choose your response",
          cancelText: 'Cancel',
          buttons: [{ text: ' <i class="ion-checkmark"></i> Yes' },
                    { text: ' <i class="ion-close"></i> No' },
                    { text: ' <i class="ion-refresh"></i> May Be' }],
           buttonClicked: function(index) 
           {
              $ionicLoading.show();
              EventsService.respondEvent(index,$stateParams.Id,userdetails.id).success(function(data){
                $ionicLoading.hide();
                $ionicPopup.alert({title:"Success!",template:data.msg}).then(function(res){
                  $state.reload();
                });
              })
              .error(function(data){
                $ionicLoading.hide();
                $ionicPopup.alert({title:"Error!",template:data.msg});
              });
              return true;
            }
         });
    }
  }
  if($state.current.name=="app.events")
  {
    $ionicLoading.show();
    EventsService.getEvents(userdetails.community_id).success(function(data){
      $ionicLoading.hide();
      $scope.events = data.msg;
    })
    .error(function(data){
        $ionicLoading.hide();
      $ionicPopup.alert({title:"Error!",template:data.msg});
    });
  }

  $scope.showDate = function(ip)
  {
    var options = {
      date: new Date(),
      mode: 'date', // or 'time'
      minDate: new Date() - 10000,
      allowOldDates: true,
      allowFutureDates: false,
      androidTheme:'16974373'
    };
     
    $cordovaDatePicker.show(options).then(function(date){
      var day = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();
      if(month < 10) month = '0'+month;
      if(day < 10) day = '0'+day;
      if(ip=='from')
        $scope.event.from_date = day+'/'+month+'/'+year;
      else
        $scope.event.to_date = day+'/'+month+'/'+year;
    });
  };
  $scope.showTime = function(ip)
  {
    var options = {
      date: new Date(),
      mode: 'time', // or 'time'
      androidTheme:'16974373'
    };
     
    $cordovaDatePicker.show(options).then(function(date){
      var hour = date.getHours();
      var min = date.getMinutes();
      if(hour < 10) hour = '0'+hour;
      if(min < 10) min = '0'+min;
      if(ip=='from')
        $scope.event.from_time = hour+':'+min;
      else
        $scope.event.to_time = hour+':'+min;
    });
  };
  $ionicModal.fromTemplateUrl('./templates/add-event.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showEvents = function()
  {
    $scope.modal.show();
  }
  $scope.closeEvents = function()
  {
    $scope.modal.hide();
  };
});