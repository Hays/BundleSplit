//
//  RNFuncViewController.m
//  BundleHack
//
//  Created by Hays on 27/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "RNFuncViewController.h"

@interface RNFuncViewController ()

@property(nonatomic, copy) NSString *moduleName;
@property(nonatomic, strong) RCTBridge *bridge;

@end

@implementation RNFuncViewController

- (instancetype)initWithModuleName:(NSString *)moduleName bridge:(RCTBridge *)bridge
{
  self = [super init];
  if (self) {
    self.moduleName = moduleName;
    self.bridge = bridge;
  }
  return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:self.bridge moduleName:self.moduleName initialProperties:nil];
  self.view = rootView;
}

@end
