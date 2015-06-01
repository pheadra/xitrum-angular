package review.action

import xitrum.{SkipCsrfCheck, Action}
import xitrum.annotation.GET
import review.dao._


trait Api extends Action
trait Api2 extends Action with SkipCsrfCheck

@GET("")
class Home extends Action {
  def execute() {
    respondView()
  }
}

@GET("/HomeMin")
class HomeMin extends Action {
  def execute() {
    respondView()
  }
}

@GET("/ping")
class ping extends Action {
  def execute() {
    respondText("hello world");
  }
}


@GET("/reviews/list")
class GetReviewsList extends Api2 {
  def execute() {
    val limit = param[Int]("limit");
    val page = param[Int]("page");
    val appid = param[String]("appid")
    val lang = param[String]("lang")
    val market = paramo[String]("market")
    val nation = paramo[String]("nation")

    if (market.isDefined) {
      val reviews = ReviewDao.findReviewListWithMarket(appid, lang, market.get, page, limit)
      respondJson(reviews)
    } else {
      val reviews = ReviewDao.findReviewList(appid, lang, page, limit)
      respondJson(reviews)
    }
  }
}

@GET("/reviews/info")
class GetReviewsinfo extends Api2 {

  def execute() {
    val appid = param[String]("appid")

    val reviews = ReviewDao.findReviewStatistics(appid)

    val reviewdata = Map("reviews" -> reviews)
    respondJson(reviewdata)
  }
}


@GET("/reviews/statistics")
class GetReviewsStatistics extends Api2 {

  def execute() {
    val appid = param[String]("appid")
    val code = param[String]("code")

    val reviewsconunt = ReviewDao.findReviewCount(appid, code)
    val reviewsgraph = ReviewDao.findReviewGraph(appid, code)
    val reviewssummery = ReviewDao.findReviewSummery(appid, code)

    val reviewdata = Map("reviewscount" -> reviewsconunt, "graph"->reviewsgraph, "summery" -> reviewssummery)
    respondJson(reviewdata)
  }

}
