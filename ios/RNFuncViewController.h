//
//  RNFuncViewController.h
//  BundleHack
//
//  Created by Hays on 27/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTRootView.h>

@interface RNFuncViewController : UIViewController

- (instancetype)initWithModuleName:(NSString *)moduleName bridge:(RCTBridge *)bridge;

@end
