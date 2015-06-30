#!/usr/bin/env python3

import sys
import glob

def loadText(file):
    text = ""
    for line in file:
        text += line
    return text

def constructHeader():
    header = "<!DOCTYPE html>\n<html>\n<head>\n" + getStylesheetsList() + "</head>\n<body>\n</body>\n</html>"
    return header
def getStylesheetsList():
    stylesheets = "stylesheets/*.css"
    cssFiles = glob.glob(stylesheets)
    stylesheetLinks = ""
    for file in cssFiles:
        stylesheetLinks += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + file + "\">\n"
    return stylesheetLinks

def run(inputFile):
    headerFile = open("header.html", "r")
    footerFile = open("footer.html", "r")

    headerFileText = loadText(headerFile)
    inputFileText = loadText(inputFile)
    footerFileText = loadText(footerFile)

    headerFile.close()
    footerFile.close()

    outputFileName = inputFile.name + ".out.html"
    outputFile = open(outputFileName, "w")
    outputFile.write(headerFileText)
    outputFile.write(inputFileText)
    outputFile.write(footerFileText)
    outputFile.close()

    
if __name__ == '__main__':
##    fileName = sys.argv[1:][0]
##    inputFile = open(fileName, "r")
##    run(inputFile)
##    inputFile.close()
    print(constructHeader())
