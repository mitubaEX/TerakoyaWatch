package tutorial.webapp

import org.scalajs.dom
import dom.document
import scala.scalajs.js.annotation.JSExportTopLevel
import org.scalajs.jquery.jQuery

object TutorialApp {
  def setupUI(): Unit = {
    // jQuery("#click-me-button").click(() => addClickedMessage())
    jQuery("""<button type="button">Click me!</button>""")
      .click(addClickedMessage _)
      .appendTo(jQuery("body"))
    jQuery("body").append("<p>Hello World</p>")
  }

	def addClickedMessage(): Unit = {
		appendPar(document.body, "You clicked the button!")
	}

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val parNode = document.createElement("p")
    val textNode = document.createTextNode(text)
    parNode.appendChild(textNode)
    targetNode.appendChild(parNode)
  }

  def main(args: Array[String]): Unit = {
    // appendPar(document.body, "Hello Scala")
    // jQuery("body").append("<p>[message]</p>")
    jQuery(() => setupUI())
  }
}

