You can use absolute and relative units like px and em in CSS Grid to define the size of rows and columns. You can use these as well:

<div style="margin-left:20px;">
fr: sets the column or row to a fraction of the available space,<br>
auto: sets the column or row to the width or height of its content automatically,<br>
%: adjusts the column or row to the percent width of its container.
</div>

<div><br>
Example<br>
<strong>grid-template-columns: auto 50px 10% 2fr 1fr;</strong><br>
&nbsp &nbsp &nbsp This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.
<br>
</div>
<br>
<div>
    <strong> Grid Gap</strong>
    <br>
    <i>grid-gap:10px 20px;</i>
    <br>
    If grid-gap has one value, it will create a gap between all rows and columns
    <br>
</div>

<div>
<br>
<a href="https://www.freecodecamp.org/learn/responsive-web-design/css-grid/use-grid-column-to-control-spacing">Grid Column</a>
<br>
Same concept for grid row

<div><br><br>
 You can align the content's position within its cell horizontally using the justify-self property on a grid item. By default, this property has a value of stretch, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:

start: aligns the content at the left of the cell,

center: aligns the content in the center of the cell,

end: aligns the content at the right of the cell.
</div>