# Nested Accordian
  ## What does it do?
    ### It has a list of desserts.  When you click on a dessert, it brings up a
        description of the dessert and an additional list that is supposed to
        contain a list of related desserts.
  ## What interactive elements exist?
    ### li hides content in an accordian.  Also, the arrows change direction when
        you hover over them.
  ## How do you interact with them?
    ### You click the list items and hover over the arrows.
  ## What visual effects are produced by interacting?
    ### The description of the desserts and additional list appears when outside
        li is clicked.  The arrow points down 45 degrees when hovered.
  ## How does it do it?
    ### with CSS hover and js event listeners ( on click? ).  Could be done by
        grabbing the list items, putting them in an array and then showing them
        when the list item is clicked.  Use redraw()?
  ## What existing HTML elements are changed?
    ### the classes of the right arrow/down arrow and the hidden div
  ## What new HTML elements are created?
    ### none
  ## What CSS styles are used to produce the effect?
    ### hover with transform: rotate, display: none/inline or block
