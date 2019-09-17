(ns server.routes.home
  (:require
    [server.layout :as layout]
    [clojure.java.io :as io]
    [server.middleware :as middleware]
    [ring.util.http-response :as response]
    [clj-http.client :as client]
    [cheshire.core :refer :all]))

(defn some-page [request]
  (println  (:body (client/get "https://my-json-server.typicode.com/typicode/demo/posts")))
  (println (type (:body (client/get "https://my-json-server.typicode.com/typicode/demo/posts"))))
  {:status 200 :body {:data (parse-string (:body (client/get "https://my-json-server.typicode.com/typicode/demo/posts")))}})

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/some" {:get some-page}]])

