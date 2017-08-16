angular.module('starter.services', [])

.service('RegisterService', function($q,$http, $rootScope) {

	return {
    RegisterUser: function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=register";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
            	deferred.resolve(response.data);
          else
            	deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
    checkCommunity:function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=community_check";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
   }

})
.service('LoginService', function($q,$http, $rootScope) {

  return {
    login: function(fields)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=login";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    }
   }

})

.service('HomeService', function($q,$http, $rootScope) {

  return {
     postfeed: function(fields)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=postfeed";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
     },
     getFeed: function(userid)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=get_feed";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: {userid:userid},
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
     },
     getComments: function(stream_id)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=get_comments";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: {stream_id:stream_id},
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
     },
     postComment: function(cmt,stream_id,user_id)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=postcomment";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: {cmt:cmt,stream_id:stream_id,user_id:user_id},
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
     },
     postLike: function(stream_id,user_id)
     {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=postlike";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: {stream_id:stream_id,user_id:user_id},
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
     },
   }

})
.service('InvoiceService', function($q,$http, $rootScope) {

  return {
    RegisterUser: function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=register";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
    checkCommunity:function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=community_check";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
   }

})
.service('ClassifiedService', function($q,$http, $rootScope) {

  return {
    postClassified:function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=post_classified";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
    getClassified:function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=get_classified";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
    getClassifiedById:function(id)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=get_classified_by_id";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: {id:id},
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
  }
})
.service('InboxService', function($q,$http, $rootScope) {

  return {
    postClassified:function(fields)
    {
        var deferred = $q.defer();
        var promise = deferred.promise;
        url = "http://162.144.41.156/~izaapinn/ram/action.php?action=post_classified";
        $http({
          url: url,
          method: 'post',
          // dataType:"jsonp",
         contentType:'application/json',
          params: fields,
          headers:{'Access-Control-Allow-Origin': '*'}
        })
       .then(function(response) 
        {
          var user_data = response.data;
          if(user_data.status=="success")
              deferred.resolve(response.data);
          else
              deferred.reject(response.data);
        });

        promise.success = function(fn)
        {
            promise.then(fn);
            return promise;
        }
        promise.error = function(fn)
        {
            promise.then(null, fn);
            return promise;
        }
        //console.log(promise);
        return promise;
    },
  }
});