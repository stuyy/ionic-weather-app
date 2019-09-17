(ns server.routes.home
  (:require
    [server.layout :as layout]
    [clojure.java.io :as io]
    [server.middleware :as middleware]
    [ring.util.http-response :as response]
    [clj-http.client :as client]
    [cheshire.core :refer :all]
    [clojure.data.json :as json]
    [clojure.string :as str]))

(def api-key (get (json/read-str (slurp "config.json")) "token"))
(def weather-url "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=")

(defn get-weather [city]
  (try
    (let [res (:body (client/get (str weather-url (str/join city) "&appid=" api-key)))]
      (parse-string res))
      
    (catch Exception err (println (.getMessage err)))))

(defn some-page [request]
  (println  (:body (client/get "https://my-json-server.typicode.com/typicode/demo/posts")))
  (println (type (:body (client/get "https://my-json-server.typicode.com/typicode/demo/posts"))))
  {:body {:data (get-weather "new york")}})

(defn home-routes []
  [""
   {:middleware [middleware/wrap-csrf
                 middleware/wrap-formats]}
   ["/some" {:get some-page}]])

