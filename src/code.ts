/** ==================== 
 * Settings for plugin
======================*/
const windowWidth = 320;
const windowHeight = 524;

// Open plugin window
figma.showUI(__html__, {width: windowWidth, height: windowHeight});

figma.ui.onmessage = msg => {
  const nodes = [];
  const nodesGroup = [];
  const cols = msg.cols;
  const rows = msg.rows;

  const rectWidth = 100;
  const rectHeight = 100;

  for (let col = 0; col < cols; col++) { 
    const rect = figma.createRectangle();
    rect.resizeWithoutConstraints(rectWidth, rectHeight);
    rect.x = col * (rectWidth + msg.margin);
    nodes.push(rect);
  }
  

  for (let row = 0; row < rows; row++) {
    const y = row * (rectHeight + msg.margin);
    const group = figma.group(nodes, figma.currentPage);
    group.y = y;
    group.clone();
    
    nodesGroup.push(group);
  }

  figma.closePlugin();
}